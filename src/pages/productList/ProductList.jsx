import React from 'react';
import style from './productList.module.scss';
import {
  Navbar,
  Announcement,
  Products,
  Newsletter,
  Footer,
} from '../../components';

const ProductList = () => {
  return (
    <div className={style.container}>
      <Announcement />
      <Navbar />
      <h1 className={style.title}>Dresses</h1>
      <div className={style.filterContainer}>
        <div className={style.filter}>
          <span>
            Filter products:
            </span>
            <select name="" id="" defaultValue={"Color"}>
            <option disabled  value="Color">Color</option>
              <option value="">White</option>
              <option value="">Black</option>
              <option value="">Red</option>
              <option value="">Blue</option>
              <option value="">Yellow</option>
              <option value="">Green</option>
            </select>
            <select name="" id="">
            <option disabled selected value="">Size</option>
              <option value="">S</option>
              <option value="">XS</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">Xl</option>
            </select>
          
        </div>
        <div className={style.filter}>
          <span>Sort products: </span>
            <select name="" id="">
                <option selected value="">Newest</option>
                <option value="">Price (asc)</option>
                <option value="">Price (desc)</option>
            </select>
          
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
