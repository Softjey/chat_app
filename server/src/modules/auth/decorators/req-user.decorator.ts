import { createParamDecorator } from '@nestjs/common';
import type { Request } from 'express';
import { User } from 'src/resources/user/entities/user.entity';
import { ExecutionContext } from 'src/types/execution-context.types';
import { ContextHelper } from 'src/utils/context.helper';

export const ReqUser = createParamDecorator<keyof User, ExecutionContext>(
  (property, executionContext) => {
    const returnProperty = (user?: User) => {
      if (!user) {
        throw new Error('You must to use auth guard before using ReqUser decorator');
      }

      return property ? user[property] : user;
    };

    return ContextHelper.handleContext(executionContext, {
      graphql: (context) => returnProperty(context.req.user),
      http: (context) => returnProperty(context.getRequest<Request>().user),
    });
  },
);
