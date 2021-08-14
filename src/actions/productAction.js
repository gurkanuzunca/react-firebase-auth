import * as actions from './types';
import { db } from '../services/firebase';



export const getProducts = () => dispatch => {
  db.ref('products').once('value', (snapshot) => {
    const productData = snapshot.val();

    const products = Object.keys(productData || []).map(productKey => {
      return productData[productKey];
    })
    
    dispatch({
      type: actions.GET_PRODUCTS,
      payload: products
    });
  });
}

export const getProduct = (id) => dispatch => {
  db.ref('products').child(id).once('value', (snapshot) => {
    const productDetail = snapshot.val();
    
    dispatch({
      type: actions.GET_PRODUCT_DETAIL,
      payload: productDetail
    });
  });
}


export const updateProduct = (id, data) => async dispatch => {
  return db.ref('products').child(id).update(data)
    .then(() => {
      dispatch({
        type: actions.UPDATE_PRODUCT,
      });

      return id
    });
}


export const createProduct = (data) => async dispatch => {
  const id = db.ref('products').push().key;
  const product = {
    id: id,
    createdAt: new Date().getTime(),
    ...data
  }

  return db.ref('products').child(id).set(product)
    .then(() => {
      dispatch({
        type: actions.CREATE_PRODUCT,
        payload: product
      });

      return product.id
    });
}

export const deleteProduct = (id) => dispatch => {
  db.ref('products').child(id).remove().then(() => {
    dispatch({
      type: actions.DELETE_PRODUCT,
      payload: id
    })
  })
  
}