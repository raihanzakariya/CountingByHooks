import React, { useState } from "react";

const App = () => {
  const state = useState();

  const [count, setCount] = useState(0);
  const interCount = () => {
    setCount(count + 1);
  };

  //  const count = useState();
  return (
    <>
      <h1> {count} </h1>
      <button onClick={interCount}> Click Me </button>
    </>
  );
};

export default App;
