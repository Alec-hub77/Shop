import { loginFeilure, loginStart, loginSuccess } from './userSlice';
import { publicRequest, userRequest } from '../requestMethods';
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from './productRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFeilure());
  }
};
//get products
export const getProducs = async (dispatch) => {
  dispatch(getProductStart());

  try {
    const res = await publicRequest.get('/products');
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

//delete products
export const deleteProducs = async (id, dispatch) => {
  dispatch(deleteProductStart());

  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

//update products
export const updateProducs = async (id, product, dispatch) => {
  dispatch(updateProductStart());

  try {
    // const res = await userRequest.put(`/products/${id}`);
    dispatch(updateProductSuccess({id, product}));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
//add products
export const addProducs = async (product, dispatch) => {
  dispatch(addProductStart());

  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
