import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './modules/config/config.module';
import { DataBaseModule } from './modules/database/database.module';

@Module({
  imports: [ConfigModule, DataBaseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
