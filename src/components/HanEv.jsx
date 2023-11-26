// import React, { useState } from "react";

// function HanEv() {
//   let [data, setData] = useState(0);
//   const handleClick = (ind, e) => {
//     alert("i am when clicked the event" + ind);
//     console.dir(e.target.value);
//   };
//   return (
//     <div>
//       <button
//         onClick={(e) => {
//           handleClick("it will trigger automatically", e);
//         }}
//       >
//         Click
//       </button>

//       <input
//         type="text"
//         onKeyUp={(e) => {
//           handleClick("i am form text input", e);
//         }}
//       />
//       <h1>value:{data}</h1>
//       <button
//         onClick={() => {
//           setData(++data);
//         }}
//       >
//         UPdate counter
//       </button>
//     </div>
//   );
// }

// export default HanEv;

import React, { useState } from "react";

function HanEv() {
  let [data, updateData] = useState({
    name: "NOkia G53",
    price: 1500000,
  });
  console.log(data);
  return (
    <>
      <h1>Proudct Name:{data.name}</h1>
      <h1>Proudct Price:{data.price}</h1>
      <input type="text" id="dd" />
      <input type="text" id="dc" />
      <button
        onClick={() => {
          let ds = document.getElementById("dd").value || data.price;
          let dc = document.getElementById("dc").value || data.name;

          updateData({
            ...data,
            price: ds,
            name: dc,
          });
        }}
      >
        UPdate Me
      </button>
    </>
  );
}

export default HanEv;
