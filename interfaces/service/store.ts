import { Store} from "datastore/entities/Store";
import { User } from "datastore/entities/User";
import {
    CreateStoreVariables as RepoCreateStoreVars,
    UpdateStoreVariables as RepoUpdateStoreVars,
    FindAllVars as RepoFindAllVars,
} from "../repository/store";

export type CreateStoreVariables = Omit<RepoCreateStoreVars, 'userId'>;
export type UpdateStoreVariables = RepoUpdateStoreVars;
export type FindAllVars = RepoFindAllVars;

export interface StoreService {
    create(user: User, vars: CreateStoreVariables): Promise<Store>;
    update(user: User, id: string, vars: UpdateStoreVariables): Promise<Store>;
    findById(user: User, id: string): Promise<Store | undefined>;
    findByIds(user: User, ids: string[]): Promise<Store[]>;
    delete(user: User, id: string): Promise<boolean>;
    findAll(user: User, vars: FindAllVars): Promise<Store[]>;
}