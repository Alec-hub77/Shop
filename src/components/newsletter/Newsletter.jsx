import { Send } from '@material-ui/icons'
import React from 'react'
import style from './newsletter.module.scss'

const Newsletter = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Newsletter</h1>
            <div className={style.description}>Get timely updates from your favorite products</div>
            <div className={style.inputContainer}>
                <input type="email" placeholder="Your email"/>
                <button><Send/></button>
            </div>
        </div>
    )
}

export default Newsletter
