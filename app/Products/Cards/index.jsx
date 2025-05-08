"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const router = useRouter();

  useEffect(() => {
    const url = category
      ? `https://dummyjson.com/products/category/${category}`
      : `https://dummyjson.com/products`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  const toggleLike = (e, product) => {
    e.stopPropagation();

    const updatedLikes = { ...liked, [product.id]: !liked[product.id] };
    setLiked(updatedLikes);

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!liked[product.id]) {
      favorites.push(product);
    } else {
      favorites = favorites.filter((item) => item.id !== product.id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const initialLiked = {};
    storedFavorites.forEach((item) => {
      initialLiked[item.id] = true;
    });
    setLiked(initialLiked);
  }, []);

  const addToCart = (e, product) => {
    e.stopPropagation();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.id === product.id);
    if (index > -1) {
      cart[index].quantity = (cart[index].quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (id) => {
    router.push(`/Products/Cards/${id}`);
  };

  return (
    <div className="p-6 w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="border flex items-center p-3 justify-between border-gray-100 rounded-[10px] mb-5"
      >
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full focus:outline-none"
          placeholder="Search Product"
        />
        <IoSearch className="text-gray-500 text-2xl" />
      </form>

      <div className="flex flex-wrap p-10 gap-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleCardClick(product.id)}
              className="group flex flex-col bg-[#fbfbfb] h-[380px] w-[280px] transition duration-300 hover:scale-[1.015] hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.115)] shadow-[0_0_30px_0px_rgba(0,0,0,0.115)] rounded p-4 relative cursor-pointer"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-[200px] object-cover rounded mb-3"
              />
              <div className="pt-5">
                <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                <p className="text-green-600 font-bold">${product.price}</p>
              </div>

              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => addToCart(e, product)}
                  className="text-xl text-gray-600 hover:text-green-500 active:scale-100 transition transform hover:scale-110"
                  title="Add to Cart"
                >
                  <MdOutlineAddShoppingCart />
                </button>
                <button
                  onClick={(e) => toggleLike(e, product)}
                  className="text-xl text-gray-600 hover:text-red-500 transition transform hover:scale-110"
                  title="Like"
                >
                  {liked[product.id] ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FiHeart />
                  )}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
