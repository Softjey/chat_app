import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { GroupsModule } from './modules/groups/groups.module';
import { GraphQLModule } from './modules/graphql/graphql.module';

@Module({
  imports: [ConfigModule, DatabaseModule, GraphQLModule, AuthModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
