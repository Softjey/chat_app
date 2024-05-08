import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsOptional, Max, Min } from 'class-validator';

export abstract class PaginationHelper {
  static getPagination({ offset, limit }: PaginationArgsI) {
    const pagination: { skip?: number; take?: number } = {};

    if (offset) {
      pagination.skip = offset;
    }

    if (limit) {
      pagination.take = limit;
    }

    return pagination;
  }
}

export interface PaginationArgsI {
  offset?: number;
  limit?: number;
}

@ArgsType()
abstract class PaginationOffset {
  @Field(() => Int)
  @Min(0)
  offset: number = 0;
}

@ArgsType()
abstract class OptionalPaginationOffset {
  @Field(() => Int, { nullable: true })
  @Min(0)
  @IsOptional()
  offset?: number;
}

@ArgsType()
export class MessagesPaginationArgs extends PaginationOffset implements PaginationArgsI {
  @Min(1)
  @Max(150)
  @Field(() => Int)
  limit: number = 100;
}

@ArgsType()
export class GroupUsersPaginationArgs extends PaginationOffset implements PaginationArgsI {
  @Min(1)
  @Max(100)
  @Field(() => Int)
  limit: number = 50;
}

@ArgsType()
export class UserGroupsPaginationArgs extends PaginationOffset implements PaginationArgsI {
  @Min(1)
  @Max(100)
  @Field(() => Int)
  limit: number = 50;
}

@ArgsType()
export class MyGroupsPaginationArgs extends OptionalPaginationOffset {
  @Min(1)
  @Field(() => Int, { nullable: true })
  @IsOptional()
  limit?: number;
}
