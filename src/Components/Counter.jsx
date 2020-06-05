import React, { useState } from "react";
import Display from "./Display";
// import ButtonPad from "./ButtonPad";

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className="counter">
      <br></br>
      <Display />
      <h1>{count}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <br></br>
      <br></br>
      <button className="btn" onClick={reset}>
        {" "}
        reset{" "}
      </button>
      {/* <ButtonPad /> */}
    </div>
  );
}

export default Counter;
