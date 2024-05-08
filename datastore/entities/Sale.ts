import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from './Product';

@Entity('sale', { schema: 'public' })
export class Sale  {
    static entityName = 'Sale';

    public entityName: string = Sale.entityName;

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('integer', {
        comment: 'The total quantity of each product sold.'
    })
    quantity: number;

    @Column('integer', {
        comment: 'The total of the sales made.'
    })
    total: number;

    @Column('uuid', {
        comment: 'The Product that was sold.'
    })
    productId: string;

    @ManyToOne(() => Product, (product) => product.sales)
    product: Product;
}
