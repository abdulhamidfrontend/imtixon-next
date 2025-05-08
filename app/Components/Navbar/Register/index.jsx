"use client";
import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { signInWithGoogle } from "../../../../firebase";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      const data = await res.json();

      if (res.ok && data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data));
        message.success("Muvaffaqiyatli kirildi!");
        window.location.reload();
      } else {
        message.error(data.message || "Login xato");
      }
    } catch (err) {
      console.error("Xato:", err);
      message.error("Server xatoligi");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-3">
      <h1 className="font-medium text-xl leading-[80%] text-[#46a358] text-center mb-8">
        Login
      </h1>
      <h1 className=" font-normal mb-3.5 text-[13px] leading-[123%] text-[#3d3d3d]">
        Enter your username and password to login.
      </h1>
      <div className="flex flex-col gap-4 items-end justify-end">
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#a5a5a5] border-[#46a358]"
        />
        <Input.Password
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#a5a5a5] border-[#46a358] hover:border-[#46a358] focus:border-[#46a358]"
        />
        <h3 className="font-normal text-sm leading-[114%] text-[#46a358] cursor-pointer">
          Forgot Password?
        </h3>
      </div>
      <Button
        style={{
          backgroundColor: "#46a358",
          height: "45px",
          color: "white",
          border: "none",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "100%",
        }}
        htmlType="submit"
      >
        Login
      </Button>
      <div className="flex gap-2.5 mt-6 items-center justify-center">
        <div className="border w-[90px] border-solid border-[#eaeaea]"></div>
        <h3 className="font-normal  text-[12px] leading-[123%] text-[#3d3d3d]">
          Or login with
        </h3>
        <div className="border w-[90px] border-solid border-[#eaeaea]"></div>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <button
          onClick={() => signInWithGoogle()}
          className="border flex items-center justify-center gap-2.5 h-10 rounded-[5px] border-solid border-[#eaeaea] w-full"
        >
          <FaGoogle className="text-2xl" />
          Login with Google
        </button>
        <button className="border flex items-center justify-center gap-2.5 h-10 rounded-[5px] border-solid border-[#eaeaea] w-full">
          <FaFacebook className="text-2xl" />
          Login with Facebook
        </button>
      </div>
    </form>
  );
};

export default Login;
