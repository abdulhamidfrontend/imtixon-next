"use client";
import React, { Suspense } from "react";
import Navbar from "../Components/Navbar";
import Hero from "@/app/Components/Hero";
import Category from "../Products/Category";
import Cards from "../Products/Cards";
import Footer from "../Components/Footer/index";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex">
        <Category />

        <Suspense fallback={<p className="p-5">Yuklanmoqda...</p>}>
          <Cards />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
