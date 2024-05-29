import { Sale } from "../../datastore/entities/Sale"

export type CreateSaleVariables = {
    quantity: number;
    total: number;
    productId: string;
};

export type UpdateSaleVariables = {
    quantity?: number;
    total: number;
};

export type FindAllVars = {
    productId: string;
};

export interface SaleRepository {
    create(vars: CreateSaleVariables): Promise<Sale>;
    update(id: string, vars: UpdateSaleVariables): Promise<Sale>;
    findById(id: string): Promise<Sale | undefined>;
    findByIds(ids: string[]): Promise<Sale[]>;
    findByIdOrFail(id: string): Promise<Sale>;
    delete(id: string): Promise<boolean>;
    findAll(vars: FindAllVars): Promise<Sale[]>;
}