import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { User } from './User';
import { Product } from './Product';

@Entity()
export class Store  {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string;

    @Column()
    description: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date | null;

    @DeleteDateColumn()
    deletedAt: Date | null;

    @Column()
    userId: string;

    @ManyToOne(() => User, (user) => user.stores)
    user: User;

    @OneToMany(() => Product, (product) => product.store)
    products?: Product[];
}
