import React from "react";

import { listProducts } from "../../data";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  return (
    <div className="productsContent">
      <h1>This is the Page Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum odio
        rem cum adipisci cupiditate ea porro autem, doloribus nulla fugit
        corporis! Sapiente minima minus voluptatum? Maiores excepturi ipsam
        nesciunt, rem delectus illo nostrum ducimus harum vero ipsum eius
        provident vitae nulla itaque earum, fugiat, esse qui ad doloremque. Amet
        nostrum quibusdam, voluptas consequatur accusamus dicta a harum iure
        accusantium suscipit velit neque quos voluptatibus laborum totam
        quisquam? Quae dolorem eligendi commodi. Suscipit porro aut ratione
        voluptatum, sed nulla cumque corrupti harum saepe aliquid officia, neque
        quasi? Deserunt natus ex optio amet culpa adipisci, soluta ullam minima,
        quam earum dolor!
      </p>

      <hr />
      {/* Display list of products */}
      <div className="listProducts">
        {listProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
