import React from 'react'
import style from './categories.module.scss'

const CategoryItem = ({item}) => {
    return (
        <div className={style.itemContainer}>
            <img src={item.img} alt="" className={style.img}/>
            <div className={style.info}>
                <h1 className={style.title}>{item.title}</h1>
                <button className={style.btn}>SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoryItem
