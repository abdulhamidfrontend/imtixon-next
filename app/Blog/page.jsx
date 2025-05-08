import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Posts from "../Blog/Posts/page";

const Blog = () => {
  return (
    <div className="max-w-[90%] m-auto">
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
};

export default Blog;
