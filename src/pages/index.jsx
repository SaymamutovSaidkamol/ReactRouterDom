import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import ContactUs from "./ContactUs/ContactUs";
import Pricing from "./Pricing/Pricing";
import Work from "./Work/Work";
import Loyout from "./Loyout/Loyout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/work" element={<Work />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
