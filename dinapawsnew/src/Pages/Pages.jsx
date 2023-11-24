import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "./Home";
import About from "./About";

function Pages() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
