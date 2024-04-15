import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Store } from './Store';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    createdAt: Date | null

    @Column()
    lastLoginDate: Date | null

    @OneToMany(() => Store, (store) => store.user)
    stores?: Store[];
}
