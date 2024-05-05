import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const url = configService.get('dataBaseUrl');
        const type = url.split(':')[0] as TypeOrmModuleOptions['type'];

        return {
          url,
          type,
          synchronize: true,
          entities: [User],
        };
      },
    }),
  ],
})
export class DatabaseModule {}
