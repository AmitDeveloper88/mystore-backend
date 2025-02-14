import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { Product } from '../../shared/src/entities/Product';
import { Category } from '../../shared/src/entities/Category';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'admin',
            database: 'mystore',
            entities: [Product, Category],
            synchronize: true,
            logging: true  // Add this for debugging
        }),
        TypeOrmModule.forFeature([Product, Category]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class AppModule { }