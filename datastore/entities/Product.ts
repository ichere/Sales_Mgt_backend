import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Store } from './Store';
import { Sale } from './Sale';

@Entity()
export class Product  {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string;

    @Column()
    unitPrice: number;

    @Column()
    quantity: number;

    @Column()
    serialNumber: number;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date | null;

    @DeleteDateColumn()
    deletedAt: Date | null;

    @Column()
    storeId: string;

    @ManyToOne(() => Store, (store) => store.products)
    store: Store;

    @OneToMany(() => Sale, (sale) => sale.product)
    sales?: Sale[];
}
