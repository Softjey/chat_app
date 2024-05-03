import { Injectable, Scope } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { AppConfig } from './interfaces/app-config.interface';

@Injectable({ scope: Scope.REQUEST })
export class ConfigService extends NestConfigService<AppConfig> {
  get<T extends keyof AppConfig>(propertyPath: T): AppConfig[T] {
    const value = super.get(propertyPath, { infer: true });

    if (!value) {
      throw new Error(`Config property "${propertyPath}" not found`);
    }

    return value;
  }
}
