import { actionTypes } from '../constants/actionTypes';

const INITIAL_STATE = {
    products: [],
    selected_product: null
};

// const removeProduct = (products, product) => {
//     return products.filter(p => p.id !== product.id);
// }

const productReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type){
        case actionTypes.SET_PRODUCTS: return {...state, products: payload };
        case actionTypes.SELECTED_PRODUCT: return { ...state, selected_product: payload };
        case actionTypes.REMOVE_SELECTED_PRODUCT: 
            return { ...state, selected_product: null }
    }

    return state;
}

export default productReducer;