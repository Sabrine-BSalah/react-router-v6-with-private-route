import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <Link
        to={`/product/${product.id}`}
        state={product}
        className="productLink"
      >
        <h3>{product.name}</h3>
      </Link>
      <img src={product.img} alt={product.name} className="productImg" />
    </div>
  );
};

export default ProductCard;
