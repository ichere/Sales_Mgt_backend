import { User } from "../../datastore/entities/User";

export type CreateUserVariables = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export type UpdateUserVariables = {
    firstName?: string;
    lastName?: string;
};

export interface UserRepository {
    create(vars: CreateUserVariables): Promise<User>;
    update(id: number, vars: UpdateUserVariables): Promise<User>;
    findById(id: number): Promise<User | undefined>;
    findByIdOrFail(id: number): Promise<User>;
    findBy(vars: Partial<User>): Promise<User | undefined>;
    updatePartial(id: number, vars: Partial<User>): Promise<User>;
}