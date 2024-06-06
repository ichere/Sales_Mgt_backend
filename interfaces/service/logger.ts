export interface AdditionalErrorInformation {
    contexts?: Record<string, unknown>;
    code?: string;
}

export interface LoggingUser {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
}

export interface OperationContext {
    query?: string;
    operationName?: string;
    variables?: Record<string, unknown>;
}

export interface LoggingService {
    error(error: string | Error): void;
    log(error: string): void;
    info(error: string): void;
    debug(error: string): void;
    warn(error: string): void;
}
  