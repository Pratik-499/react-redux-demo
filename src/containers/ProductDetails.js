import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';
//import { products_api } from '../API/Products';
import { selectedProduct, removeProduct } from '../redux/actions/productActions';
import Rhombus from '../images/Rhombus.gif';

const ProductDetails = (props) => {
    //const { state: product } = useLocation();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.selected_product);

    // console.log('product', product, productId);

    // const fetchProductDetail = async () => {
    //     try {
    //         const { data } = await products_api.get(`/products/${productId}`)
    //         dispatch(selectedProduct(data));
    //     } catch(err){
    //         console.log(err);
    //     }
    // }

    useEffect(() => {
        // fetchProductDetail();
        dispatch(selectedProduct(productId));

        return () => {
            dispatch(removeProduct())
        }
    }, [productId]);

    if(!product){
        return (
            <div className='loading'>
                <div className='loading-inner'>
                    <img src={Rhombus} alt="loading" />
                </div>
            </div>
        )
    }

    const { id, title, image, price, category, description, rating } = product;

    return (
        <div className='ui grid container'>
            <div className='ui placeholder segment'>
                <div className='ui two column stackable center aligned grid'>
                    <div className='ui vertical divider'>AND</div>
                    <div className='middle aligned row'>
                        <div className='column lp'>
                            <img className='ui fluid image' src={ image } alt={title} />
                        </div>
                        <div className='column rp'>
                            <h1>{title}</h1>
                            <h2>
                                <span className='ui teal tag label'>$ {price}</span>
                            </h2>
                            <h3 className='ui brown block header'>{category}</h3>
                            <p>{description}</p>
                            <div className='ui vertical animated button' tabIndex="0">
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className='visible content'>Add to cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ProductDetails);