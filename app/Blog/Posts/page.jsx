"use client";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Link from "next/link";
import { IoSearch, IoAddCircleOutline } from "react-icons/io5";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { Modal, Button, Input, message } from "antd";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchCard, setSearchCard] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  const handleAddPost = () => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newPost.title,
        body: newPost.body,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        message.success("Post added successfully!");
        setPosts((prev) => [data, ...prev]);
        setNewPost({ title: "", body: "" });
        setModalOpen(false);
      })
      .catch(() => {
        message.error("Failed to add post.");
      });
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchCard.toLowerCase())
  );

  return (
    <div className="max-w-[90%] m-auto">
      <Navbar />
      <h2 className="text-center font-bold mb-4 text-3xl mt-5">My Feed</h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="border w-[800px] flex items-center p-3 justify-between m-auto rounded-xl border-gray-300"
      >
        <input
          type="search"
          value={searchCard}
          onChange={(e) => setSearchCard(e.target.value)}
          className="focus:outline-none w-full"
          placeholder="Search by title..."
        />
        <IoSearch className="text-gray-500" />
      </form>

      <div className="add">
        <IoAddCircleOutline
          className="text-4xl ml-10 mt-5 cursor-pointer text-green-600"
          onClick={() => setModalOpen(true)}
        />
      </div>

      <Modal
        title="Add New Post"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        width={400}
        style={{ height: 500 }}
        footer={[
          <Button key="cancel" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleAddPost}
            disabled={!newPost.title || !newPost.body}
          >
            Submit
          </Button>,
        ]}
      >
        <div className="flex flex-col gap-3 h-full">
          <Input
            placeholder="Add Title"
            value={newPost.title}
            onChange={(e) =>
              setNewPost((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <Input.TextArea
            style={{ resize: "none" }}
            placeholder="Add Body"
            value={newPost.body}
            onChange={(e) =>
              setNewPost((prev) => ({ ...prev, body: e.target.value }))
            }
            rows={4}
          />
        </div>
      </Modal>

      <div className="cards my-10 flex items-center flex-wrap gap-5 justify-evenly">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="border h-[250px] relative w-[400px] border-gray-200 p-4 rounded-xl"
            >
              <Link href={`/Blog/Posts/${post.id}`}>
                <h3 className="text-lg font-medium mb-2 hover:underline cursor-pointer">
                  {post.title}
                </h3>
              </Link>
              <p className="text-[12px] line-clamp-4 pr-2">{post.body}</p>
              <div className="flex items-center bg-white absolute bottom-7 right-0 left-0 justify-evenly border-t pt-7 mt-7 border-gray-200">
                <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 cursor-pointer">
                  <FaEye />
                  <p className="text-[12px]">{post.views}</p>
                </button>
                <button className="flex items-center gap-2 border-r border-l px-10 border-gray-200 text-gray-500 hover:text-green-600 cursor-pointer">
                  <AiOutlineLike />
                  <p className="text-[12px]">{post.reactions?.likes}</p>
                </button>
                <button className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-green-600">
                  <AiOutlineDislike />
                  <p className="text-[12px]">{post.reactions?.dislikes}</p>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No posts found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Posts;
