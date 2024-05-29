import { Product } from "../../datastore/entities/Product"

export type CreateProductVariables = {
    name: string;
    description: string;
    unitPrice: number;
    quantity: number;
    storeId: string;
};

export type UpdateProductVariables = {
    name?: string;
    description?: string | null;
    unitPrice?: number | null;
    quantity?: number | null;
};

export type FindAllVars = {
    storeId: string;
};

export interface ProductRepository {
    create(vars: CreateProductVariables): Promise<Product>;
    update(id: string, vars: UpdateProductVariables): Promise<Product>;
    findById(id: string): Promise<Product | undefined>;
    findByIds(ids: string[]): Promise<Product[]>;
    findByIdOrFail(id: string): Promise<Product>;
    delete(id: string): Promise<boolean>;
    findAll(vars: FindAllVars): Promise<Product[]>;
}