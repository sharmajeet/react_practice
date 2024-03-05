import { Container, Heading } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import CoinsDetails from "./components/CoinsDetails";
import Exchanges from "./components/Exchanges";
// import ColorModeSwitcher from "./ColorModeSwitcher";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/coinsdetails" element={<CoinsDetails/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
      </Routes>
    </Router>
  );
}

export default App;