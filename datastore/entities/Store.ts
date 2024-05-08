import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { User } from './User';
import { Product } from './Product';

@Entity('store', { schema: 'public' })
export class Store  {
    static entityName = 'Store';

    public entityName: string = Store.entityName;
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'character varying',
        length: 256,
        comment: 'Name of the Store.',
    })
    name: string;

    @Column('text', {
        comment: 'Description of the Store.',
    })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date | null;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date | null;

    @Column('uuid', {
        comment: 'The user the Store belongs to.'
    })
    userId: string;

    @ManyToOne(() => User, (user) => user.stores)
    user: User;

    @OneToMany(() => Product, (product) => product.store)
    products?: Product[];
}
