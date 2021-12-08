import React from 'react'
import { Link } from 'react-router-dom'
import style from './categories.module.scss'

const CategoryItem = ({item}) => {
    return (
        <div className={style.itemContainer}>
            <Link to={`/productlist/${item.cat}`}>
            <img src={item.img} alt="" className={style.img}/>
            <div className={style.info}>
                <h1 className={style.title}>{item.title}</h1>
                <button className={style.btn}>SHOP NOW</button>
            </div>
            </Link>
        </div>
    )
}

export default CategoryItem
