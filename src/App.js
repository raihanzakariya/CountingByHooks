import React, { useState } from "react";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  let [actualTime, setTime] = useState(newTime);
  const UpDate = () => {
    let newCTime = new Date().toLocaleTimeString();
    setTime(newCTime);
  };
  //  const count = useState();
  return (
    <>
      <div>
        <h1 className="colorr"> {actualTime} </h1>
        <button onClick={UpDate}> Get TIME </button>
      </div>
    </>
  );
};

export default App;
