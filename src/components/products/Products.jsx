import React from 'react';
import style from './products.module.scss';
import { popularProducts } from '../../data';
import Product from './Product';
import axios from 'axios';

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = React.useState([]);
  const [filtredProduct, setFiltredProduct] = React.useState([]);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  React.useEffect(() => {
    cat &&
      setFiltredProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  React.useEffect(() => {
    if (sort === 'newest') {
      setFiltredProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFiltredProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFiltredProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className={style.container}>
      {cat
        ? filtredProduct.map((item) => <Product key={item.id} item={item} />)
        : products.slice(0,8).map((item) => <Product key={item.id} item={item} />)}
    </div>
  );
};

export default Products;
