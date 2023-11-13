import React, { useState } from "react";

const Greet = (p) => {
  console.log(p, "ppp");
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>id:{p.id}</h1>
      <h1>{p.name}</h1>
      <h1>{p.age}</h1>

      <h1>{p.city}</h1>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Greet;
