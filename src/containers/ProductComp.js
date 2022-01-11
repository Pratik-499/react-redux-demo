import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import placeholder from '../images/placeholder.png';
//import Rhombus from '../images/Rhombus.gif';

/*<div className='loading'>
                <div className='loading-inner'>
                    <img src={Rhombus} alt="loading" />
                </div>
            </div>*/

const ProductComp = () => {
    const products = useSelector(state => state.product.products);
    // console.log('products', products);

    if(products.length === 0){
        return (          
                <div className="ui-loading ui four column very relaxed grid">
                    {Array(8).fill(1).map((count, index) => (
                    <div key={index} className="column"><img src={placeholder} /></div>
                    ))}
                </div>
        )
    }

    return (
        <div className='ui four cards'>
            { products.map(product => <ProductCard key={product.id} product={product} />) }
        </div>
    )
}

export default ProductComp;