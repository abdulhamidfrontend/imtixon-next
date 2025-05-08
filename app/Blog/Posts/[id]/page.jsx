"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { FaEye } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import Link from "next/link";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="max-w-[90%] m-auto mt">
      <Navbar />
      <div className="max-w-[700px] relative py-20 m-auto">
        <h1 className="text-[30px] font-bold mb-3">{post.title}</h1>
        <p className="font-medium">{post.body}</p>
        <div className="flex items-center gap-3 my-5">
          <button className="flex items-center cursor-pointer gap-1.5 font-medium">
            <FaEye />
            <p>{post.views || 0}</p>
          </button>
          <button className="flex items-center cursor-pointer gap-1.5 font-medium">
            <AiOutlineLike />
            <p>{post.reactions?.likes || 0}</p>
          </button>
          <button className="flex items-center cursor-pointer gap-1.5 font-medium">
            <AiOutlineDislike />
            <p>{post.reactions?.dislikes || 0}</p>
          </button>
          <button className="flex items-center cursor-pointer gap-1.5 font-medium">
            <IoShareSocialOutline />
            <p>0</p>
          </button>
        </div>
        <Link href={"/Blog/Posts"}>
          <button className="flex absolute bottom-[20px] right-[20px] cursor-pointer hover:underline items-center gap-2 text-blue-600">
            <IoArrowBackSharp />
            BACK TO POSTS
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
