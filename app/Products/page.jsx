import React from "react";
import Category from "../Products/Category";
import Cards from "./Cards";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
const index = () => {
  return (
    <div className="max-w-[90%] m-auto">
      <Navbar />
      <Hero />
      <div className="flex">
        <Category />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default index;
