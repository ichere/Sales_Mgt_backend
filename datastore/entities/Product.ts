import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Store } from './Store';
import { Sale } from './Sale';

@Entity('product', { schema: 'public' })
export class Product  {
    static entityName = 'Product';

    public entityName: string = Product.entityName;

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'character varying',
        length: 256,
        comment: 'Name of the Product.',
    })
    name: string;

    @Column('integer', {
        comment: 'The unit price of each product.'
    })
    unitPrice: number;

    @Column('integer', {
        comment: 'The quantity of the product.'
    })
    quantity: number;

    @Column('integer', {
        comment: 'The serial number of each product.'
    })
    serialNumber: number;

    @Column('text', {
        comment: 'The description of each product.'
    })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date | null;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date | null;

    @Column('uuid', {
        comment: 'The Store the product belongs to.'
    })
    storeId: string;

    @ManyToOne(() => Store, (store) => store.products)
    store: Store;

    @OneToMany(() => Sale, (sale) => sale.product)
    sales?: Sale[];
}
