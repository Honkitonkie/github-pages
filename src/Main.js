import React from "react";
import {Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dropdown from "./pages/Dropdown";
import Exercises from "./pages/Exercises";
import Error from "./pages/Error";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/github-pages' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/exercises/' element={<Exercises />}></Route>
        <Route exact path='exercises/dropdown' element={<Dropdown />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
