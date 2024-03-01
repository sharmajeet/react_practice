import { useState } from "react";
import "./App.css";
import Crypto from "./Crypto";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Crypto />
      </div>
    </>
  );
}

export default App;
