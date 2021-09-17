import React from 'react'
import style from './products.module.scss'
import {popularProducts} from '../../data';
import Product from './Product';

const Products = () => {
    return (
        <div className={style.container}>
            {popularProducts.map(item => (
                <Product key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default Products
