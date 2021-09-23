import React from 'react'
import style from './cart.module.scss'
import {Announcement, Navbar, Footer} from '../../components'
import { Add, Remove } from '@material-ui/icons'

const Cart = () => {
    return (
        <div className={style.container}>
            <Announcement />
            <Navbar />
                <div className={style.wrapper}>
                    <h1 className={style.title}>YOUR BAG</h1>
                    <div className={style.top}>
                        <button className={`${style.topBtn} ${style.left}`}>CONTINUE SHOPPING</button>
                        <div className={style.topTexts}>
                            <span className={style.topText}>Shopping bag (2)</span>
                            <span className={style.topText}>Your wishlist (0)</span>
                        </div>
                        <button className={`${style.topBtn} ${style.right}`}>CHECKOUT NOW</button>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.info}>
                            <div className={style.product}>
                                <div className={style.productDetail}>
                                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                                    <div className={style.details}>
                                        <span className={style.productName}><b>Product: </b>JESSIE THUNDER SHOES</span>
                                        <span className={style.productID}><b>ID: </b>9852453245</span>
                                        <div className={style.productColor}></div>
                                        <span className={style.productSize}><b>ID: </b>37.5</span>
                                    </div>
                                </div>
                                <div className={style.priceDetail}>
                                    <div className={style.productAmmount}>
                                        <Add/>
                                        <span className={style.ammount}>2</span>
                                        <Remove/>
                                    </div>
                                    <div className={style.productPrice}>$ 30</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className={style.summery}>
                            <h1 className={style.summeryTitle}>ORDER SUMMERY</h1>
                            <div className={style.summeryItem}>
                                <span className={style.summeryText}>Subtotal</span>
                                <span className={style.summeryPrice}>$ 30</span>
                            </div>
                            <div className={style.summeryItem}>
                                <span className={style.summeryText}>Estimated Shipping</span>
                                <span className={style.summeryPrice}>$ 10</span>
                            </div>
                            <div style={{fontWeight: '500', fontSize: '24px'}} className={style.summerysummeryText} className={style.summeryItem}>
                                <span >Total</span>
                                <span className={style.summeryPrice}>$ 30</span>
                            </div>
                            <button className={style.summeryBtn}>CHECKOUT NOW</button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Cart
