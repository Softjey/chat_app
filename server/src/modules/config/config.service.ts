import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { AppConfig } from './interfaces/app-config.interface';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {}

  get<T extends keyof AppConfig>(propertyPath: T): AppConfig[T] {
    const value = this.configService.get(propertyPath, { infer: true });

    if (!value) {
      throw new Error(`Config property "${propertyPath}" not found`);
    }

    return value as AppConfig[T];
  }
}
