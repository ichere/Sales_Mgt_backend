import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from './Product';

@Entity()
export class Sale  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    total: number;

    @Column()
    productId: string;

    @ManyToOne(() => Product, (product) => product.sales)
    product: Product;
}
