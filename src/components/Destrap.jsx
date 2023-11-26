import React from "react";

function Destrap({ name, age }) {
  let data = [
    {
      id: 1,
      name: "gopi",
      age: 3,
    },
    {
      id: 2,
      name: "ramesh",
      age: 4,
    },
    {
      id: 3,
      name: "pydi",
      age: 5,
    },
  ];
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </>
  );
}

export default Destrap;
