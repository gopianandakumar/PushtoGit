import React, { useEffect, useState } from "react";
import NewOne from "./NewOne";
function ProductLP() {
  const [productlist, updateProductList] = useState([]);

  useEffect(() => {
    getProductlist();
  }, []);

  async function getProductlist() {
    let proudcts = await fetch("https://fakestoreapi.com/products");
    let updatedList = await proudcts.json();
    updateProductList(updatedList);
    console.log(updatedList);
  }

  if (productlist.length === 0) {
    <h1>Loading...............</h1>;
  }

  return (
    <>
      <div className="cardList">
        {productlist.map((p) => (
          <NewOne {...p} key={p.id}></NewOne>
        ))}
      </div>
    </>
  );
}

export default ProductLP;
