import { User } from "datastore/entities/User";
import {
    CreateUserVariables as RepoCreateVariables,
    UpdateUserVariables as RepoUpdateVariables,
} from "../repository/user";

export type UserReturnVars = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
};

export type LoginVariables = {
    email: string;
    password: string;
};

export type UserReturnVarsWithToken = UserReturnVars & {
    token: string;
};

export type ResetPasswordVars = {
    verificationToken: string;
    password: string;
};
  
export type UpdatePasswordVars = {
    currentPassword: string;
    newPassword: string;
};

export type CreateUserVariables = RepoCreateVariables;

export type UpdateUserVariables = RepoUpdateVariables;

export interface UserService {
    create(vars: CreateUserVariables): Promise<UserReturnVars>;
    update(user: User, id: number, vars: UpdateUserVariables): Promise<UserReturnVars>;
    login(login: LoginVariables): Promise<UserReturnVarsWithToken>;
    verifyEmail(verificationCode: string): Promise<void>;
    recoverPassword(email: string): Promise<void>;
    resetPassword(vars: ResetPasswordVars): Promise<void>;
    changePassword(user: User, vars: UpdatePasswordVars): Promise<User>;
}