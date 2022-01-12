import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductComp from './ProductComp';
//import { useSelector } from 'react-redux';
//import { products_api } from '../API/Products';
//import { setProducts } from '../redux/actions/productActions';
import { fetchProducts } from '../redux/actions/productActions';

const ProductListing = () => {
    //const store_product = useSelector(state => state.product);
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     try {
    //         const { data } = await products_api.get('/products');
    //         // console.log('data', data);
    //         dispatch(setProducts(data));
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    useEffect(() => {
        // fetchProducts();
        dispatch(fetchProducts());
    }, []);
    
    return (
        <div className='ui grid container'>
            <ProductComp />
        </div>
    )
}

export default ProductListing;