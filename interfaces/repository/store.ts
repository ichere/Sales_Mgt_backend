import { Store } from "../../datastore/entities/Store"

export type CreateStoreVariables = {
    name: string;
    description: string;
    userId: number;
};

export type UpdateStoreVariables = {
    name?: string;
    description?: string | null;
};

export type FindAllVars = {
    userId: number;
};

export interface StoreRepository {
    create(vars: CreateStoreVariables): Promise<Store>;
    update(id: string, vars: UpdateStoreVariables): Promise<Store>;
    findById(id: string): Promise<Store | undefined>;
    findByIds(ids: string[]): Promise<Store[]>;
    findByIdOrFail(id: string): Promise<Store>;
    delete(id: string): Promise<boolean>;
    findAll(vars: FindAllVars): Promise<Store[]>;
}