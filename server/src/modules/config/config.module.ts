import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { ConfigService } from './config.service';

@Global()
@Module({
  imports: [NestConfigModule.forRoot({ load: [configuration] })],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
