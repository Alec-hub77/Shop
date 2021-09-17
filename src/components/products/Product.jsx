import React from 'react'
import style from './products.module.scss'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons';

const Product = ({item}) => {
    return (
        <div className={style.productContainer}>
            <div className={style.circle}></div>
            <img className={style.img} src={item.img} alt="" />
            <div className={style.info}>
                <div className={style.icon}>
                    <ShoppingCartOutlined/>
                </div>
                <div className={style.icon}>
                    <SearchOutlined/>
                </div>
                <div className={style.icon}>
                    <FavoriteBorderOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Product
