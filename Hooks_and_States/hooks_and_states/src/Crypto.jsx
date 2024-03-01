import React, { useState,useEffect } from "react";

const Crypto = () => {
  const arr = [1, 2, 3, 4];
  function clickHandler() {
    setcount(count + 1);
  }
  const [count, setcount] = useState(0);
  useEffect(() => {
   console.log("counted");
  
    
  }, [count])
  
  return (
    <>
      <div>
        {/* {arr.map((i) => {
          <Coin name={"Bitcoin"} symbol="BTC" key={i}></Coin>;
        })} */}
      </div>
      <div>Crypto</div>
      <br />
      <button onClick={clickHandler}>Count is {count}</button>
    </>
  );
};

export default Crypto;
