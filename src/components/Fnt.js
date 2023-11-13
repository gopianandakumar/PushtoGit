import React, { useState } from "react";

function Fnc() {
  const [data, setData] = useState({
    price: 1000000,
    product: "Nokia g42 5g",
  });

  return (
    <>
      <h1>{data.price}</h1>
      <h3>{data.product}</h3>
      <h3>{JSON.stringify(data)}</h3>
      <input id="pri" type="number" />
      <br />
      <button
        onClick={() => {
          let p = document.getElementById("pri").value;
          console.log(p, "000000000000000");
          setData({
            ...data,
            price: p,
          });
        }}
      >
        Click Me
      </button>
    </>
  );
}

export default Fnc;
