"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null); // activeCategory state qo'shildi
  const router = useRouter();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Xatolik:", error));
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.slug); // Aktiv kategoriya sifatida slugni saqlaymiz
    router.push(`/Products?category=${category.slug}`);
  };

  return (
    <div className="py-3 px-4.5 w-[310px] bg-[#fbfbfb]">
      <h1 className="font-bold text-lg leading-[89%] text-[#3d3d3d]">
        Categories
      </h1>
      <ul className="px-3 py-3">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`text-[15px] leading-[267%] font-normal text-[#3d3d3d] hover:text-[#46a358] hover:font-bold cursor-pointer capitalize ${
              activeCategory === category.slug
                ? "text-[#46a358] font-bold" // Aktiv kategoriya uchun maxsus stil
                : ""
            }`}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
