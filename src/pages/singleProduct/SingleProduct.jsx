import React from 'react';
import style from './singleProduct.module.scss';
import { Announcement, Navbar, Newsletter, Footer } from '../../components';
import { Remove, Add } from '@material-ui/icons';

const SingleProduct = () => {
  return (
    <div className={style.container}>
      <Announcement />
      <Navbar />
      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
        <div className={style.info}>
            <h1 className={style.title}>Denim Jumpsuit</h1>
            <p className={style.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
              iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
              tristique tortor pretium ut. Curabitur elit justo, consequat id
              condimentum ac, volutpat ornare.
            </p>
            <span className={style.price}>$ 20</span>
            <div className={style.filterContainer}>
                <div className={style.filter}>
                    <div className={style.filterTitle}>Color</div>
                    <div style={{backgroundColor: "black"}} className={style.filterColor}></div>
                    <div style={{backgroundColor: "darkblue"}} className={style.filterColor}></div>
                    <div style={{backgroundColor: "grey"}} className={style.filterColor}></div>
                </div>
                <div className={style.filter}>
                    <div className={style.filterTitle}>Size</div>
                    <select name="" id="">
                    <option value="">S</option>
                    <option value="">XS</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">Xl</option>
                    </select>
                </div>
                
            </div>
            <div className={style.addContainer}>
                    <div className={style.ammountContainer}>
                        <Remove/>
                        <span className={style.ammount}>1</span>
                        <Add/>
                    </div>
                    <button className={style.btn}>ADD TO CART</button>
                </div>
          </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
