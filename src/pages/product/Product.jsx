import React, { useEffect, useMemo, useState } from 'react';
import './product.scss';
import { Link, useLocation } from 'react-router-dom';
import { Chart } from '../../components';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { userRequest } from '../../requestMethods';

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [porductStats, setProductStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('orders/income?pid=' + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        })
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (error) {
        console.log(error)
      }
    };
  }, [productId, MONTHS]);

  const product = useSelector((state) =>
    state.product.products.find((p) => p._id === productId)
  );

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={porductStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue"> {product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">
                {product.inStock ? 'yes' : 'no'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product Descriptin</label>
            <input type="text" placeholder={product.desc} />
            <label>Product Price</label>
            <input type="text" placeholder={'$' + product.price} />
            <label>In stock</label>
            <select name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploadImg">
              <img src={product.img} alt="" />
              <label htmlFor="file">
                <Publish style={{ cursor: 'pointer' }} />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
