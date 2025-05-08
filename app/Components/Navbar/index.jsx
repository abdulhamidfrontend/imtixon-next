"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import { Button, Modal } from "antd";
import Register from "../Navbar/Register/index";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="flex items-center justify-between py-6 border-b border-green-600">
      <div className="logoimg">
        <img className="w-40" src="/images/logo.png" alt="logo" />
      </div>
      <div className="links flex items-center gap-12">
        <Link href={"/"}>
          <span className="font-medium">HOME</span>
        </Link>
        <Link href={"/Blog/Posts"}>
          <span className="font-medium">BLOG</span>
        </Link>
      </div>
      <div className="actions flex items-center gap-7">
        <button>
          <IoSearch className="text-2xl" />
        </button>
        <button onClick={() => router.push("/Cart")} className="relative">
          <MdOutlineShoppingCart className="text-2xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <Tooltip title={user ? "Profile" : "Login"}>
          <Button
            type="primary"
            onClick={() => {
              if (user) {
                router.push("/Account/Details");
              } else {
                showModal();
              }
            }}
            style={{
              backgroundColor: "#46a358",
              color: "white",
              padding: "20px 17px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {user ? (
              user.firstName
            ) : (
              <>
                <button className="flex items-center gap-2">
                  <IoMdLogIn style={{ fontSize: "20px" }} /> Login
                </button>
              </>
            )}
          </Button>
        </Tooltip>

        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={500}
        >
          <div style={{ padding: 50 }}>
            <Register />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
