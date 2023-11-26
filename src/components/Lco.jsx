import React, { useState } from "react";

function Lco() {
  const [counter, updateCounter] = useState(0);

  let stock = 10;
  return (
    <div className="Wrapper">
      <button
        className="minus"
        disabled={counter === 0}
        onClick={() => {
          if (counter > 0) {
            console.log("this method is caledddddddd");
            updateCounter(counter - 1);
          }
        }}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        className="plus"
        disabled={counter === 10}
        onClick={() => {
          if (stock > counter) {
            updateCounter(counter + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
}

export default Lco;
