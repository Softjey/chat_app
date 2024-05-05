import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContext as NestExecutionContext } from '@nestjs/common';

export type ContextType = GqlContextType;
export type ExecutionContext = GqlExecutionContext | NestExecutionContext;
