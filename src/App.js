import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Error from "./pages/Error";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rent/:id" element={<Rent />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
