"use client";
import React, { Suspense } from "react";
import Category from "../Products/Category";
import Cards from "./Cards";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const ProductsPage = () => {
  return (
    <div className="max-w-[90%] m-auto">
      <Navbar />
      <Hero />
      <div className="flex">
        <Category />
        <Suspense fallback={<p className="p-4">Loading...</p>}>
          <Cards />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
