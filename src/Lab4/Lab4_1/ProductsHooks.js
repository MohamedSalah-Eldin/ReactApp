
import "./Products.css";
import React from "react";
import products from "./ProductData";
import AddCartHook from "./AddCartUsingHook";

const ProductsHooks = () => {
  return (
    <div className="product_container">
      {products.map((product) => (
        <div className="product_card" key={product.id}>
          <div className="product_image"
            style={{
              backgroundImage: `url(${product.img})`,
              backgroundSize: "cover", }}></div>
          <div>
            <h2>{product.name}</h2>
            <div>{product.price} $</div>
            <div>{product.description}</div>
            <div>
              <strong>{product.category}</strong>
            </div>
            <AddCartHook/>
          </div>
        </div>
      ))}
    </div>
  );
};



export default ProductsHooks;