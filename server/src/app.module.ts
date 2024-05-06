import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { GroupsModule } from './modules/groups/groups.module';
import { GraphQLModule } from './modules/graphql/graphql.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule, GraphQLModule, GroupsModule],
})
export class AppModule {}
