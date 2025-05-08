"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { IoArrowBackSharp } from "react-icons/io5";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    if (productId) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error("Xatolik:", err));
    }
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-[90%] m-auto">
      <Navbar />
      <div className="p-6">
        <div className="flex w-full">
          <div className="w-[50%] flex items-center ">
            <div className="flex flex-col gap-5">
              <img
                className="w-[100px] border border-gray-200 hover:border-green-500 transition duration-300 bg-gray-100"
                src={product.images[1]}
                alt=""
              />
              <img
                className="w-[100px] border border-gray-200 hover:border-green-500 transition duration-300 bg-gray-100"
                src={product.images[2]}
                alt=""
              />
              <img
                className="w-[100px] border border-gray-200 hover:border-green-500 transition duration-300 bg-gray-100"
                src={product.images[3]}
                alt=""
              />
            </div>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-[404px] object-cover rounded"
            />
          </div>
          <div className="ml-6 w-[50%]">
            <h2 className="text-[20px] font-medium">{product.title}</h2>
            <p className="text-green-600 font-bold">${product.price}</p>
            <div className="mt-5">
              <h1 className="font-medium mb-3">Sizes:</h1>
              <div className="flex items-center gap-2.5">
                <button className="flex items-center cursor-pointer justify-center border border-gray-300 rounded-full hover:border-green-500 w-7 h-7">
                  S
                </button>
                <button className="flex items-center cursor-pointer justify-center border border-gray-300 rounded-full hover:border-green-500 w-7 h-7">
                  M
                </button>
                <button className="flex items-center cursor-pointer justify-center border border-gray-300 rounded-full hover:border-green-500 w-7 h-7">
                  L
                </button>
                <button className="flex items-center cursor-pointer justify-center border border-gray-300 rounded-full hover:border-green-500 w-7 h-7">
                  XL
                </button>
              </div>
            </div>
            <div className="description mt-5">
              <h1 className="font-medium mb-3">Description :</h1>
              <p className="text-[14px] font-medium text-[#727272]">
                {product.description}
              </p>
            </div>
            <div className="flex gap-12 mt-5 items-center">
              <div className="flex flex-col gap-2 mt-2">
                <h1 className="text-[14px] font-medium ">
                  Category : {product.category}
                </h1>
                <h1 className="text-[14px] font-medium ">
                  Tags : {product.tags.join(", ")}
                </h1>
                <h1 className="text-[14px] font-medium ">
                  Warranty : {product.warrantyInformation}
                </h1>
                <h1 className="text-[14px] font-medium ">
                  Barcode : {product.meta.barcode}
                </h1>
              </div>
              <Link href={"/Blog/Posts"}>
                <button className="flex absolute bottom-[20px] right-[20px] cursor-pointer hover:underline items-center gap-2 text-blue-600">
                  <IoArrowBackSharp />
                  BACK TO POSTS
                </button>
              </Link>
              <div>
                <img className="w-[90px]" src={product.meta.qrCode} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews border-t border-b border-green-500 p-5">
        <h1 className="font-medium text-3xl mb-5">Reviews</h1>

        {product.reviews?.map((review, index) => (
          <div
            key={index}
            className="p-5 border w-full rounded-xl border-gray-200 mb-4"
          >
            <h1 className="text-[14px] font-medium">
              <span className="text-green-600">Reviewer Name: </span>
              {review.reviewerName}
            </h1>
            <h1 className="text-[14px] font-medium">
              <span className="text-green-600">Reviewer Email: </span>
              {review.reviewerEmail}
            </h1>
            <h1 className="text-[14px] font-medium">
              <span className="text-green-600">Comment: </span>
              {review.comment}
            </h1>
            <h1 className="text-[14px] font-medium">
              <span className="text-green-600">Rating: </span>
              {review.rating}
            </h1>
            <h1 className="text-[14px] font-medium">
              <span className="text-green-600">Date: </span>
              {new Date(review.date).toLocaleDateString()}
            </h1>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
