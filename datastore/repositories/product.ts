import { Product } from "datastore/entities/Product";
import { ProductRepository } from "interfaces/repository";
import { CreateProductVariables, UpdateProductVariables, FindAllVars } from "interfaces/repository/product";
import { AbstractRepository, EntityNotFoundError, EntityRepository } from "typeorm";


@EntityRepository(Product)
export class SQLProductRepository extends AbstractRepository<Product> implements ProductRepository{
    public async create(vars: CreateProductVariables): Promise<Product> {
        const product = await this.repository.save(vars);
        return product;
    }
    public async update(id: string, vars: UpdateProductVariables): Promise<Product> {
        const product = await this.findByIdOrFail(id);
        return this.repository.save({ });
    }
    public async findById(id: string): Promise<Product | undefined> {
        const product = await this.repository.findOne(id);
        return product;
    }
    public async findByIds(ids: string[]): Promise<Product[]> {
        const products = await this.repository.findByIds(ids);
        return products;
    }
    public async findByIdOrFail(id: string): Promise<Product> {
        const product = await this.repository.findOne(id);
        if (!product) throw new EntityNotFoundError(Product.entityName, id);

        return product;
    }
    public async delete(id: string): Promise<boolean> {
        await this.findByIdOrFail(id);
        await this.repository.delete(id);
        return true;
    }
    public async findAll(vars: FindAllVars): Promise<Product[]> {
        const products = await this.repository.find({ where: { storeIdId: vars.storeId } });
        return products;
    }
}