import React from 'react';
import style from './productList.module.scss';
import {
  Navbar,
  Announcement,
  Products,
  Newsletter,
  Footer,
} from '../../components';
import { useLocation } from 'react-router';

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = React.useState({})
  const [sort, setSort] = React.useState('newest')

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name] : value,
    })
  }
  

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
            <select name="color"  defaultValue={"Color"} onChange={handleFilters}>
            <option disabled  value="Color">Color</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
            </select>
            <select name="size" onChange={handleFilters}>
            <option disabled defaultValue={"Size"}>Size</option>
              <option value="S">S</option>
              <option value="XS">XS</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          
        </div>
        <div className={style.filter}>
          <span>Sort products: </span>
            <select name="" onChange={(e) => setSort(e.target.value)}>
                <option selected value="newest">Newest</option>
                <option value="asc">Price (asc)</option>
                <option value="desc">Price (desc)</option>
            </select>
          
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
