import { Sale } from "datastore/entities/Sale";
import { User } from "datastore/entities/User";

import {
    CreateSaleVariables as RepoCreateSaleVars,
    UpdateSaleVariables as RepoUpdateSaleVars,
    FindAllVars as RepoFindAllVars,
} from "../repository/sale";

export type CreateSaleVariables = RepoCreateSaleVars;
export type UpdateSaleVariables = RepoUpdateSaleVars;
export type FindAllVars = RepoFindAllVars;

export interface SaleService {
    create(user: User, vars: CreateSaleVariables): Promise<Sale>;
    update(user: User, id: string, vars: UpdateSaleVariables): Promise<Sale>;
    findById(user: User, id: string): Promise<Sale | undefined>;
    findByIds(user: User, ids: string[]): Promise<Sale[]>;
    delete(user: User, id: string): Promise<boolean>;
    findAll(user: User, vars: FindAllVars): Promise<Sale[]>;
}