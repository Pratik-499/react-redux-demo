import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComp from "./ProductComp";
//import { useSelector } from 'react-redux';
//import { products_api } from '../API/Products';
//import { setProducts } from '../redux/actions/productActions';
import { fetchProducts } from "../redux/actions/productActions";
import { useLocation } from "react-router-dom";

const ProductListing = ({isAuth, login}) => {
  const location = useLocation();
  // console.log('from',location);
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
    <div className="ui grid container">
      {location.state?.from.includes("account") && !isAuth && (
        <div className="ui container" style={{marginBottom: '2rem'}}>
          <div className="ui warning message">
            <i className="close icon"></i>
            <div className="header">Please login to view account page</div>
            <span style={{margin: '8px 0 16px', display:'block'}}>Signup if you don't have an account</span>

            <div><button onClick={login} type="button" className="ui button green">Log in</button></div>
          </div>
        </div>
      )}

      <ProductComp />
    </div>
  );
};

export default ProductListing;
