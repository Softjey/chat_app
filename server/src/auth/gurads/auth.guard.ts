import { Injectable, CanActivate, UnauthorizedException } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { AuthService } from '../auth.service';
import type { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const accessToken = request.headers.authorization?.split(' ')[1];

    if (!accessToken) {
      throw new UnauthorizedException(
        'Bearer token in authorization header is required',
      );
    }

    const auth = await this.authService.identifyUser(accessToken);

    if (!auth) {
      throw new UnauthorizedException('Invalid access token ');
    }

    request.auth = auth;

    return true;
  }
}
