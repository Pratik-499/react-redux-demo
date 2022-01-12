import { actionTypes } from '../constants/actionTypes';
import { products_api } from '../../API/Products';

const fetchProductsAction = products => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        payload: products
    }
}
const fetchProducts = () => async (dispatch, getState) => {
    const { data: products } = await products_api.get('/products');
    dispatch(fetchProductsAction(products));
}

const selectedProductAction = product => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

const selectedProduct = productId => {
    return async (dispatch, getState) => {
        const { data: product } = await products_api.get(`/products/${productId}`);
        dispatch(selectedProductAction(product));
    }
}

const setProducts = products => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

const removeProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
        payload: null
    }
}

export {
    fetchProducts, setProducts, selectedProduct, removeProduct
}