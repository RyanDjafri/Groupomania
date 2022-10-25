import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";
import Navbar from "../Navbar";

const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/profil" exact element={<Profil />}></Route>
          <Route path="trending" exact element={<Trending />}></Route>
          <Route path="*" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default index;
