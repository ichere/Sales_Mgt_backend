/* eslint-disable */
import { LoggingService } from '../interfaces/service';
import {
  AdditionalErrorInformation,
  LoggingUser,
  OperationContext,
} from '../interfaces/service/logger';
import { IS_PRODUCTION, IS_TEST } from 'utils/config/stage';
import { SENTRY_DSN, SENTRY_RELEASE, SENTRY_TRACES_SAMPLE_RATE, } from 'utils/config/sentry';
import { STAGE } from 'utils/config/stage';
//import { addBreadcrumb, captureException, init, setContext, setUser } from '@sentry/node';
import { addBreadcrumb, capture}
import { Integrations } from '../sentry/tracing';
import { beforeSend } from './sentry';

class ProductionLogger implements LoggingService {
  private consoleLogger: Console = console;

  public constructor() {
    process.setMaxListeners(0); // Figure out later for better fix
    if (!IS_TEST) {
      // const rewriteFramesIntegration = new RewriteFrames({
      //   iteratee: transformStacktrace,
      // });

      init({
        environment: STAGE,
        dsn: SENTRY_DSN,
        release: SENTRY_RELEASE,
        tracesSampleRate: SENTRY_TRACES_SAMPLE_RATE,
        integrations: [new Integrations.Express()],
        beforeSend,
      });
    }
  }

  public error(error: string | Error, additional?: AdditionalErrorInformation): string {
    return captureException(error, {
      level: 'error',
      tags: { errorCode: additional?.code ?? '' },
    });
  }

  public warn(error: string): void {
    addBreadcrumb({
      category: 'message',
      message: error,
      level: 'warning',
    });
  }

  public info(message: string): void {
    addBreadcrumb({
      category: 'message',
      message,
      level: 'info',
    });
  }

  public debug(message: string): void {
    addBreadcrumb({
      category: 'message',
      message,
      level: 'debug',
    });
  }

  public log(message: string): void {
    this.consoleLogger.log(message);
    addBreadcrumb({
      category: 'message',
      message,
      level: 'log',
    });
  }

  public setUser(user: LoggingUser): void {
    setUser(user);
  }

  public setOperation(context: OperationContext): void {
    setContext('operation', context);
  }
}

export class ConsoleLogger implements LoggingService {
  public error(error: string | Error): void {
    console.error(error);
  }

  public log(error: string): void {
    console.log(error);
  }

  public info(error: string): void {
    console.info(error);
  }

  public debug(error: string): void {
    console.debug(error);
  }

  public warn(error: string): void {
    console.warn(error);
  }
}

export const AppLoggingService = IS_PRODUCTION ? ProductionLogger : ConsoleLogger;
