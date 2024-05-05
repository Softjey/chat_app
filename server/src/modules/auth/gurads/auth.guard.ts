import { Injectable, CanActivate, UnauthorizedException } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { AuthService } from '../auth.service';
import type { Response, Request } from 'express';
import { CookieName } from '../constants/cookie';
import { ContextHelper } from 'src/utils/context.helper';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = ContextHelper.handleContext<Request>(context, {
      http: (ctx) => ctx.getRequest(),
      graphql: (ctx) => ctx.req,
    });
    const response = ContextHelper.handleContext<Response>(context, {
      http: (ctx) => ctx.getResponse(),
      graphql: (ctx) => ctx.res,
    });
    const { headers, cookies } = request;
    const bearerToken = headers.authorization?.split(' ')[1];
    const cookieToken = cookies[CookieName.ACCESS_TOKEN];
    const accessToken = bearerToken ?? cookieToken;

    if (!accessToken) {
      throw new UnauthorizedException('Access token is missing.');
    }

    const [user, token] = await this.authService.identifyUser(accessToken);

    request.user = user;

    if (bearerToken) {
      response.cookie(CookieName.ACCESS_TOKEN, bearerToken, {
        httpOnly: true,
        expires: new Date(token.exp * 1000),
      });
    }

    return true;
  }
}
