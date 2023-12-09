import React from "react";

function ProductCardP({ title, image, rating, price }) {
  return (
    <div className="Card">
      <img src={image} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{rating.rate}</p>
    </div>
  );
}

export default ProductCardP;
