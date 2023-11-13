import React from "react";
import Greet from "./Greet";

const data = [
  {
    id: 1,
    name: "gopi",
    age: 23,
    city: "hyderabad",
  },
  {
    id: 2,
    name: "ravi",
    age: 23,
    city: "hyderabad",
  },
  {
    id: 1,
    name: "nani",
    age: 23,
    city: "hyderabad",
  },
];

const Hello = (p) => {
  return (
    <div>
      {data.map((u) => (
        <Greet key={u.id} id={u.id} name={u.name} age={u.age} city={u.city} />
      ))}
      <h2>I am from hello</h2>
    </div>
  );
};

export default Hello;
