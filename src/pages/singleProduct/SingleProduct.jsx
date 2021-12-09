import React, { useEffect, useState } from 'react';
import style from './singleProduct.module.scss';
import { Announcement, Navbar, Newsletter, Footer } from '../../components';
import { Remove, Add } from '@material-ui/icons';
import { useLocation } from 'react-router';
import { publicRequest } from './../../requestMethods';



const SingleProduct = () => {

  const location = useLocation()
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${id}`)
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [id])

  const handleQuantity = (type) => {
      if (type === 'dec') {
        quantity >1 && setQuantity(quantity - 1)
      } else {
        setQuantity(quantity + 1)
      }
  }

  const onAddtoCart = () => {
    // update
  }
  
  
  return (
    <div className={style.container}>
      <Announcement />
      <Navbar />
      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          <img src={product.img} alt="" />
        </div>
        <div className={style.info}>
            <h1 className={style.title}>{product.title}</h1>
            <p className={style.desc}>
              {product.desc}
            </p>
            <span className={style.price}>$ {product.price}</span>
            <div className={style.filterContainer}>
                <div className={style.filter}>
                    <div className={style.filterTitle}>Color</div>
                    {product.color?.map(c => (
                      <div style={{backgroundColor: c.toLowerCase()}} className={style.filterColor} key={c} onClick={() => setColor(c)}></div>
                    ))}
                </div>
                <div className={style.filter}>
                    <div className={style.filterTitle}>Size</div>
                    <select name="" onChange={(e) => setSize(e.target.value)} >
                    {product.size?.map(s => (
                        <option value={s} key={s}>{s}</option>
                      ))}
                    </select>
                </div>
                
            </div>
            <div className={style.addContainer}>
                    <div className={style.ammountContainer}>
                        <Remove onClick={() => handleQuantity('dec')}/>
                        <span className={style.ammount}>{quantity}</span>
                        <Add onClick={() => handleQuantity('inc')}/>
                    </div>
                    <button className={style.btn} onClick={onAddtoCart}>ADD TO CART</button>
                </div>
          </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
