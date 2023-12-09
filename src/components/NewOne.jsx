import React from "react";

function NewOne({ image, title, cost, rating }) {
  return (
    <div className="Card">
      <img src={image} />
      <p>{title} </p>
      <p>{cost}</p>
      <p>{rating.cost}</p>
    </div>
  );
}

export default NewOne;
