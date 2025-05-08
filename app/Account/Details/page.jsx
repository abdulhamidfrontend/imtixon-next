"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FaUser, FaRegHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload, Form, Input } from "antd";

const Details = () => {
  const [form] = Form.useForm();
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
      setTimeout(() => {
        form.setFieldsValue({
          firstname: userData.firstName,
          lastname: userData.lastName,
          email: userData.email,
          phone: userData.phone || "",
          username: userData.username || "",
        });
      }, 0);
    }
  }, [form]);

  const isActive = (path) => pathname === path;

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="max-w-[90%] m-auto">
      <Navbar />
      <div className="my-20 flex gap-10 items-start">
        <div className="left w-[250px] p-3">
          <h1 className="text-[20px] font-bold">My Account</h1>
          <div className="btns flex flex-col mt-3 gap-3 pb-[40px] border-green-600 border-b">
            <LinkButton href="/Account/Details" isActive={isActive}>
              <FaUser size={20} /> Account Details
            </LinkButton>

            <LinkButton href="/Account/Products" isActive={isActive}>
              <MdOutlineShoppingBag size={20} /> My Products
            </LinkButton>

            <LinkButton href="/Account/Address" isActive={isActive}>
              <FaLocationDot size={20} /> Address
            </LinkButton>

            <LinkButton href="/Account/Wishlist" isActive={isActive}>
              <FaRegHeart size={20} /> Wishlist
            </LinkButton>

            <LinkButton href="/Account/Track-Order" isActive={isActive}>
              <IoSpeedometerOutline size={20} /> Track Order
            </LinkButton>
          </div>

          <button
            onClick={handleLogout}
            className="text-red-600 pt-5 text-[16px] flex items-center gap-3 cursor-pointer pl-3"
          >
            <IoMdLogOut size={20} />
            Log Out
          </button>
        </div>

        <div className="right w-full">
          <Form
            form={form}
            layout="vertical"
            onFinish={(values) => {
              const updatedUser = { ...user, ...values };
              localStorage.setItem("user", JSON.stringify(updatedUser));
              message.success("Account details updated!");
              router.refresh();
            }}
            className="grid grid-cols-2 gap-4 max-w-[800px]"
          >
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Enter a valid email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Profile Photo">
              <Upload>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item className="col-span-2">
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const LinkButton = ({ href, children, isActive }) => (
  <Link href={href}>
    <button
      className={`py-2 text-[16px] flex items-center gap-3 cursor-pointer pl-3 ${
        isActive(href)
          ? "text-green-600 border-l-4 border-green-600"
          : "hover:text-green-600 hover:border-l-4 border-green-600"
      }`}
    >
      {children}
    </button>
  </Link>
);

export default Details;
