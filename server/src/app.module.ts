import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { GroupModule } from './resources/group/group.module';
import { GraphQLModule } from './modules/graphql/graphql.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule, GraphQLModule, GroupModule],
})
export class AppModule {}
