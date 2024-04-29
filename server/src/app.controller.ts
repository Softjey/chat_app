import type { Request } from 'express';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './modules/auth/gurads/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Post()
  getHello(@Req() request: Request): string {
    return this.appService.getHello(request.auth?.email || 'World ');
  }
}
