import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const index = () => {
  return (
    <div>
      <div className="bg-[rgba(70,163,88,0.1)] w-full flex items-center py-7 px-6 gap-17">
        <div className="logo">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="location flex items-center gap-2">
          <FaLocationDot />
          70 West Buckingham Ave. <br /> Farmingdale, NY 11735
        </div>
        <div className="contact flex items-center gap-2.5">
          <FaRegEnvelope />
          <a href="mailto:contact@greenshop.com">contact@greenshop.com</a>
        </div>
        <div className="call flex items-center gap-2">
          <IoCall />
          <a href="tel:+88 01911 717 490">+88 01911 717 490</a>
        </div>
      </div>
    </div>
  );
};

export default index;
