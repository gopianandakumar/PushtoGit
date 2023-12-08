import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [product, updateProduct] = useState([]);

  useEffect(() => {
    getProductsList();
  }, []);

  if (product.length === 0) {
    return <h1>Loading data.....</h1>;
  }
  async function getProductsList() {
    let productlist = await fetch("https://fakestoreapi.com/products");
    let newdata = await productlist.json();
    console.log(newdata);
    updateProduct(newdata);
  }
  return (
    <>
      <div className="product-list">
        {product.map((p) => (
          <ProductCard {...p} key={p.id}></ProductCard>
        ))}
      </div>
    </>
  );
}
