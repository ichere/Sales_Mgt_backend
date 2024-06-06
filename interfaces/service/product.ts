import { Product } from "datastore/entities/Product";
import { User } from "datastore/entities/User";

import {
    CreateProductVariables as RepoCreateProductVars,
    UpdateProductVariables as RepoUpdateProductVars,
    FindAllVars as RepoFindAllVars,
} from "../repository/product";

export type CreateProductVariables = RepoCreateProductVars;
export type UpdateProductVariables = RepoUpdateProductVars;
export type FindAllVars = RepoFindAllVars;

export interface ProductService {
    create(user: User, vars: CreateProductVariables): Promise<Product>;
    update(user: User, id: string, vars: UpdateProductVariables): Promise<Product>;
    findById(user: User, id: string): Promise<Product | undefined>;
    findByIds(user: User, ids: string[]): Promise<Product[]>;
    delete(user: User, id: string): Promise<boolean>;
    findAll(user: User, vars: FindAllVars): Promise<Product[]>;
  }