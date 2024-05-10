import { User } from "datastore/entities/User";
import { CreateUserVariables, UpdateUserVariables, UserRepository } from "interfaces/repository/user";
import { AbstractRepository, EntityNotFoundError, EntityRepository } from "typeorm";



@EntityRepository(User)
export class SQLUserRepository extends AbstractRepository<User> implements UserRepository{
    public async create(vars: CreateUserVariables): Promise<User> {
        const user = await this.repository.save(vars);
        return user;
    }
    public async update(id: number, vars: UpdateUserVariables): Promise<User> {
        const user = await this.findByIdOrFail(id);
        return this.repository.save({ ...user, ...vars });
    }
    public async findById(id: number): Promise<User | undefined> {
        const user = await this.repository.findOne(id);
        return user;
    }
    public async findByIdOrFail(id: number): Promise<User> {
        const user = await this.repository.findOne(id);
        if (!user) throw new EntityNotFoundError(User.entityName, id);

        return user;
    }
    public async findBy(vars: Partial<User>): Promise<User | undefined> {
        const user = await this.repository.findOne({ where: vars });
        return user;
    }
    public async updatePartial(id: number, vars: Partial<User>): Promise<User> {
        const user = await this.findByIdOrFail(id);
        return this.repository.save({ ...user, ...vars });
    }

}
 