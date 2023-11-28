import React, { useState } from "react";
import Calcbutton from "./components/Calcbutton";

function Calculator() {
  let [data, setData] = useState("");

  const inputHandler = (ext) => {
    let data1 = setData(data + ext);
  };

  const clearData = (ext) => {
    setData("");
  };

  const sumData = (ext) => {
    return setData(eval(data));
  };
  return (
    <div className="container">
      <h1>Calculator App</h1>
      <div className="calculator">
        <input
          className="output"
          type="text"
          onChange={(e) => {
            let inputData = e.target.value;
            inputHandler(inputData);
          }}
          value={data}
        />

        <Calcbutton
          inputHandler={inputHandler}
          sumData={sumData}
          clearData={clearData}
        />
      </div>
    </div>
  );
}

export default Calculator;
