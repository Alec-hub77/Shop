import React, { useEffect, useState } from 'react';
import style from './cart.module.scss';
import { Announcement, Navbar, Footer } from '../../components';
import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../../requestMethods';
import { useHistory } from 'react-router';

const KEY = process.env.REACT_APP_STRIPE_KEY;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory()

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken)
  useEffect(() => { 
      const makeRequest = async () => {
          try {
            const res = await userRequest.post('checkout/payment', {
                tokenId: stripeToken.id,
                amount: cart.total * 100
            })
            history.push('/success', {data: res.data})
          } catch (err) {
              console.log(err)
          }
      }
      stripeToken && makeRequest()
  }, [stripeToken, cart.total, history])


  return (
    <div className={style.container}>
      <Announcement />
      <Navbar />
      <div className={style.wrapper}>
        <h1 className={style.title}>YOUR BAG</h1>
        <div className={style.top}>
          <button className={`${style.topBtn} ${style.left}`}>
            CONTINUE SHOPPING
          </button>
          <div className={style.topTexts}>
            <span className={style.topText}>Shopping bag (2)</span>
            <span className={style.topText}>Your wishlist (0)</span>
          </div>
          <button className={`${style.topBtn} ${style.right}`}>
            CHECKOUT NOW
          </button>
        </div>
        <div className={style.bottom}>
          <div className={style.info}>
            {cart.products.map((product) => (
              <div className={style.product} key={product._id}>
                <div className={style.productDetail}>
                  <img src={product.img} alt="" />
                  <div className={style.details}>
                    <span className={style.productName}>
                      <b>Product: </b>
                      {product.title}
                    </span>
                    <span className={style.productID}>
                      <b>ID: </b>
                      {product._id}
                    </span>
                    <div
                      style={{ backgroundColor: product.color }}
                      className={style.productColor}
                    ></div>
                    <span className={style.productSize}>
                      <b>SIZE: </b>
                      {product.size}
                    </span>
                  </div>
                </div>
                <div className={style.priceDetail}>
                  <div className={style.productAmmount}>
                    <Add />
                    <span className={style.ammount}>{product.quantity}</span>
                    <Remove />
                  </div>
                  <div className={style.productPrice}>
                    $ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}
            <hr />
          </div>
          <div className={style.summery}>
            <h1 className={style.summeryTitle}>ORDER SUMMERY</h1>
            <div className={style.summeryItem}>
              <span className={style.summeryText}>Subtotal</span>
              <span className={style.summeryPrice}>$ {cart.total}</span>
            </div>
            <div className={style.summeryItem}>
              <span className={style.summeryText}>Estimated Shipping</span>
              <span className={style.summeryPrice}>$ 10</span>
            </div>
            <div
              style={{ fontWeight: '500', fontSize: '24px' }}
              className={style.summerysummeryText}
              className={style.summeryItem}
            >
              <span>Total</span>
              <span className={style.summeryPrice}>$ {cart.total + 10}</span>
            </div>
            <StripeCheckout
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total + 10}`}
              amount={(cart.total + 10) * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className={style.summeryBtn}>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
