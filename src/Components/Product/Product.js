import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

import { listProducts } from "../../data";

const Product = () => {
  /********************* Method 1 with useLocation ***************/
  // const location = useLocation();
  // const product = location.state;

  const navigate = useNavigate();

  /********************* Method 2 with useParams ***************/
  const params = useParams();
  const [product, setProduct] = useState({});
  // console.log(params.id);

  useEffect(() => {
    setProduct(listProducts.find((product) => product.id === +params.id));
  }, [params.id]);

  return (
    <div className="productDetails">
      <h2 className="prodName">{product.name}</h2>
      <h3>{product.description}</h3>
      <img className="productImg" src={product.img} alt={product.name} />
      <br />

      {/* navigate(-1) => history go back  */}
      <Button variant="secondary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};

export default Product;
