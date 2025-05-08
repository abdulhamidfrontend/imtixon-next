import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const index = () => {
  return (
    <div>
      <div className=" flex items-start justify-between py-8 px-6 bg-[#fbfbfb]">
        <div className="myaccount flex flex-col gap-2">
          <h1 className="font-bold text-lg leading-[89%] text-[#3d3d3d]">
            My Account
          </h1>
          <p>My Account</p>
          <p>Address</p>
          <p>Wishlist</p>
        </div>
        <div className="categories flex flex-col gap-2">
          <h1 className="font-bold text-lg leading-[89%] text-[#3d3d3d]">
            Categories
          </h1>
          <p>House Plants</p>
          <p>Potter Plants</p>
          <p>Seeds</p>
          <p>Small Plants</p>
          <p>Accessories</p>
        </div>
        <div className="socialmedia flex flex-col gap-2 pr-40">
          <div className="top mb-8">
            <h1 className="font-bold text-lg mb-5 leading-[89%] text-[#3d3d3d]">
              Social Media
            </h1>
            <div className="flex items-center gap-2.5">
              <button className="flex items-center w-[30px] h-fit justify-center p-[7px]  border rounded border-solid border-[rgba(70,163,88,0.2)] ">
                <FaFacebook className="text-green-700" />
              </button>

              <button className="flex items-center w-fit h-fit justify-center p-[7px]  border rounded border-solid border-[rgba(70,163,88,0.2)] ">
                <FaInstagram className="text-green-700" />
              </button>
              <button className="flex items-center w-fit h-fit justify-center p-[7px]  border rounded border-solid border-[rgba(70,163,88,0.2)] ">
                <FaTwitter className="text-green-700" />
              </button>
              <button className="flex items-center w-fit h-fit justify-center p-[7px]  border rounded border-solid border-[rgba(70,163,88,0.2)] ">
                <FaLinkedinIn className="text-green-700" />
              </button>
              <button className="flex items-center w-fit h-fit justify-center p-[7px]  border rounded border-solid border-[rgba(70,163,88,0.2)] ">
                <FaYoutube className="text-green-700" />
              </button>
            </div>
          </div>
          <div className="bottom flex flex-col gap-2">
            <h1 className="font-bold text-lg mb-4 leading-[89%] text-[#3d3d3d]">
              We accept
            </h1>
            <img className="w-[224px]" src="/images/png/weaccept.png" alt="" />
          </div>
        </div>
      </div>
      hg1
    </div>
  );
};

export default index;
