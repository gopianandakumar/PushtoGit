import { useEffect, useState } from "react";

function TestEffect() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("this use effect is calledz");
  }, [counter]);
  return (
    <>
      <h2>Timer:{counter}</h2>
      {console.log("compoenet is called>")}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click me
      </button>

      <br />
      <button
        onClick={() => {
          setTimer(timer + 1);
        }}
      >
        updateMe
      </button>
    </>
  );
}

export default TestEffect;
