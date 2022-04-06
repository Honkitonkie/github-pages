import React from "react";
import {Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/github-pages' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
