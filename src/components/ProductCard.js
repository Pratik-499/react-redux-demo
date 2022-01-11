import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, image, price, category, description, rating } = product;

  return (
    <div className="card">
      <Link to={{ pathname: `/products/${id}`, state: product }}>
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="extra">
          <p className="product-name">{title.substr(0,20)}</p>
          <p>{description.substr(0, 20)}</p>
          <p className="product-price">
            <i className="tag icon"></i>
            <strong>$ {price}</strong>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
