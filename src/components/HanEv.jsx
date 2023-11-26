import React, { useState } from "react";

function HanEv() {
  let [data, setData] = useState(0);
  const handleClick = (ind, e) => {
    alert("i am when clicked the event" + ind);
    console.dir(e.target.value);
  };
  return (
    <div>
      <button
        onClick={(e) => {
          handleClick("it will trigger automatically", e);
        }}
      >
        Click
      </button>

      <input
        type="text"
        onKeyUp={(e) => {
          handleClick("i am form text input", e);
        }}
      />
      <h1>value:{data}</h1>
      <button
        onClick={() => {
          setData(++data);
        }}
      >
        UPdate counter
      </button>
    </div>
  );
}

export default HanEv;
