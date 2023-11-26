import React, { useState } from "react";

function Twdb() {
  let [data, setData] = useState();
  return (
    <>
      <h1>{data}</h1>
      <button
        onClick={() => {
          setData(200);
        }}
      >
        Click for one way data Binding
      </button>
      <br />
      <input
        type="text"
        onChange={(e) => {
          let da = e.target.value;
          setData(da);
        }}
        value={data}
      />
    </>
  );
}

export default Twdb;
