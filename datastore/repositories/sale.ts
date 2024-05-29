import { Sale } from "datastore/entities/Sale";
import { SaleRepository } from "interfaces/repository";
import { CreateSaleVariables, UpdateSaleVariables, FindAllVars } from "interfaces/repository/sale";
import { AbstractRepository, EntityNotFoundError, EntityRepository } from "typeorm";

@EntityRepository(Sale)
export class SQLSaleRepository extends AbstractRepository<Sale> implements SaleRepository{
    public async create(vars: CreateSaleVariables): Promise<Sale> {
        const sale = await this.repository.save(vars);
        return sale;
    }
    public async update(id: string, vars: UpdateSaleVariables): Promise<Sale> {
        const sale = await this.findByIdOrFail(id);
        return this.repository.save({...sale, ...vars});
    }
    public async findById(id: string): Promise<Sale | undefined> {
        const sale = await this.repository.findOne(id);
        return sale;
    }
    public async findByIds(ids: string[]): Promise<Sale[]> {
        const sales = await this.repository.findByIds(ids);
        return sales;
    }
    public async findByIdOrFail(id: string): Promise<Sale> {
        const sale = await this.repository.findOne(id);
        if(!sale) throw new EntityNotFoundError(Sale.entityName, id);

        return sale;
    }
    public async delete(id: string): Promise<boolean> {
        await this.findByIdOrFail(id);
        await this.repository.delete(id);
        return true;
    }
    public async findAll(vars: FindAllVars): Promise<Sale[]> {
        const sales = await this.repository.find({ where: { productIdId: vars.productId } });
        return sales;
    }
}