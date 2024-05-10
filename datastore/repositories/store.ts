import { Store } from "datastore/entities/Store";
import { CreateStoreVariables, FindAllVars, StoreRepository, UpdateStoreVariables } from "interfaces/repository/store";
import { AbstractRepository, EntityNotFoundError, EntityRepository } from "typeorm";


@EntityRepository(Store)
export class SQLStoreRepository extends AbstractRepository<Store> implements StoreRepository{
    public async create(vars: CreateStoreVariables): Promise<Store> {
        const store = await this.repository.save(vars);
        return store;
    }
    public async update(id: string, vars: UpdateStoreVariables): Promise<Store> {
        const store = await this.findByIdOrFail(id);
        return this.repository.save({...store, ...vars});
    }
    public async findById(id: string): Promise<Store | undefined> {
        const store = await this.repository.findOne(id);
        return store;
    }
    public async findByIds(ids: string[]): Promise<Store[]> {
        const stores = await this.repository.findByIds(ids);
        return stores;
    }
    public async findByIdOrFail(id: string): Promise<Store> {
        const store = await this.repository.findOne(id);
        if (!store) throw new EntityNotFoundError(Store.entityName, id);

        return store;
    }
    public async delete(id: string): Promise<boolean> {
        await this.findByIdOrFail(id);
        await this.repository.delete(id);
        return true;
    }
    public async findAll(vars: FindAllVars): Promise<Store[]> {
        const stores = await this.repository.find({ where: { userId: vars.userId } });
        return stores;
    }
    

}
