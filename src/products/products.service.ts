import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../../shared/src/entities/Product';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) { }

    async findAll() {
        const products = await this.productsRepository.find({
            relations: {
                category: true,
            },
        });
        console.log('Products found:', JSON.stringify(products, null, 2));
        return products;
    }
}