export interface UtilsService {
    encode(params: Record<string, unknown>): string;
    decode<T = Record<string, unknown>>(params: string): T;
}