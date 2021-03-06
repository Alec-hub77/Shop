import React from 'react'
import style from './categories.module.scss'
import {categories} from '../../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
    return (
        <div className={style.container}>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default Categories
