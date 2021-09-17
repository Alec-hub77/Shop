import { Facebook, Instagram, Pinterest, Room, Twitter, Phone, MailOutline } from '@material-ui/icons'
import React from 'react'
import style from './footer.module.scss'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <h1 className={style.logo}>SHOP.</h1>
                <p className={style.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique nisi quidem officia, ipsa mollitia illo laboriosam fugiat delectus accusantium porro eligendi ex incidunt officiis dolore cumque consequuntur! Ipsa, nihil quidem saepe ipsam non illo magni, consequatur laborum necessitatibus recusandae aperiam quae? Quae suscipit corporis asperiores assumenda ipsa, laboriosam obcaecati?</p>
                <div className={style.socialContainer}>
                    <div className={style.socialIcon} style={{backgroundColor: "#3b5999"}} >
                        <Facebook/>
                    </div>
                    <div className={style.socialIcon} style={{backgroundColor: "#e4405f"}}>
                        <Instagram/>
                    </div>
                    <div className={style.socialIcon} style={{backgroundColor: "#55acee"}}>
                        <Twitter/>
                    </div>
                    <div className={style.socialIcon} style={{backgroundColor: "#e60023"}}>
                        <Pinterest/>
                    </div>
                </div>
            </div>
            <div className={style.center}>
                <h3 className={style.title}>Useful links</h3>
                <ul className={style.list}>
                    <li className={style.listItem}>Home</li>
                    <li className={style.listItem}>Cart</li>
                    <li className={style.listItem}>Man Fashion</li>
                    <li className={style.listItem}>Woman Fashion</li>
                    <li className={style.listItem}>Accessories</li>
                    <li className={style.listItem}>My Account</li>
                    <li className={style.listItem}>Order Tracking</li>
                    <li className={style.listItem}>Wishlist</li>
                    <li className={style.listItem}>Terms</li>
                </ul>
            </div>
            <div className={style.right}>
                <h3 className={style.title}>Contact</h3>
                <div className={style.contactItem}><Room/> 622 Dixie Path , South Tobinchester 98336</div>
                <div className={style.contactItem}><Phone/>+1 234 56 78</div>
                <div className={style.contactItem}><MailOutline/>contact@shop.com</div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" className={style.paymentImg}/>
            </div>
        </div>
    )
}

export default Footer
