import React from 'react'
import style from './products.module.scss'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Product = ({item}) => {
    return (
        <div className={style.productContainer}>
            <div className={style.circle}></div>
            <img className={style.img} src={item.img} alt="" />
            <div className={style.info}>
                <div className={style.icon}>
                    <ShoppingCartOutlined/>
                </div>
                <Link to={`/product/${item._id}`}>
                <div className={style.icon}>
                    <SearchOutlined/>
                </div>
                </Link>
                <div className={style.icon}>
                    <FavoriteBorderOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Product
