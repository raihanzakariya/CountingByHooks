import React, { useState } from "react";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [actualTime, setTime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  setInterval(UpdateTime, 100);
  //  const count = useState();
  return (
    <>
      <div>
        <h1> {actualTime} </h1>
      </div>
    </>
  );
};

export default App;
