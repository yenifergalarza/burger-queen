import React from "react";
import Product from "./product";
import ButtonOfTotal from "./TotalPrice"
const ProductList = ({
  products,
  addToCart,
  removeFromCart,
  deleteFromCart
  // available
}) => {
  return (
    <div className="column is-centered box container is-5">
      <div clasname="column ">
        <div clasname="column ">
          {products.map(prod => (
            <Product
              key={prod.id}
              title={prod.title}
              price={prod.price}
              available={available}
              addToCart={() => addToCart(prod.id)}
              removeFromCart={() => removeFromCart(prod.id)}
              deleteFromCart={() => deleteFromCart(prod.id)}
            />
          ))}
        </div>
   <  ButtonOfTotal total={total}></ButtonOfTotal>
      </div>
    </div>
  );
};

export default ProductList;
