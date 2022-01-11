import { actionTypes } from '../constants/actionTypes';

const setProducts = products => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

const selectedProduct = product => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

const removeProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
        payload: null
    }
}

export {
    setProducts, selectedProduct, removeProduct
}