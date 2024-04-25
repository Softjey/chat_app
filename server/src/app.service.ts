import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(value: string): string {
    return `Hello ${value}!`;
  }
}
