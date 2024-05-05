import { HttpArgumentsHost, RpcArgumentsHost, WsArgumentsHost } from '@nestjs/common/interfaces';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ContextType, ExecutionContext } from 'src/types/execution-context.types';
import { GqlContext } from 'src/types/gql-context.types';

type ContextCallback<Context, Return = unknown> = (context: Context) => Return;

interface HandleContextOptions<T> {
  graphql?: ContextCallback<GqlContext, T>;
  http?: ContextCallback<HttpArgumentsHost, T>;
  ws?: ContextCallback<WsArgumentsHost, T>;
  rpc?: ContextCallback<RpcArgumentsHost, T>;
}

export abstract class ContextHelper {
  static handleContext<T>(context: ExecutionContext, options: HandleContextOptions<T>): T {
    const contextType = context.getType<ContextType>();

    if (contextType === 'graphql' && options.graphql) {
      const gqlContext = GqlExecutionContext.create(context).getContext<GqlContext>();

      return options.graphql(gqlContext);
    }

    if (contextType === 'http' && options.http) {
      return options.http(context.switchToHttp());
    }

    if (contextType === 'ws' && options.ws) {
      return options.ws(context.switchToWs());
    }

    if (contextType === 'rpc' && options.rpc) {
      return options.rpc(context.switchToRpc());
    }

    throw new Error(`${contextType} is not supported context type or callback is missing.`);
  }
}
