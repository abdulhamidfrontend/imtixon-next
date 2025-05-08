import React from "react";

const index = () => {
  return (
    <div>
      <div className="wrapper  p-6 flex items-center justify-between mb-6">
        <div className="leftcards flex gap-9  flex-wrap">
          <div className="card w-fit">
            <img className="w-[70px]" src="/images/png/flower1.png" alt="" />
            <h1 className="font-bold text-[17px] leading-[94%] text-[#3d3d3d] mt-4 mb-2">
              Garden Care
            </h1>
            <h3 className="font-normal text-sm leading-[157%] text-[#727272]">
              We are an online plant shop <br /> offering a wide range of cheap{" "}
              <br />
              and trendy plants.
            </h3>
          </div>
          <div className="card px-7 border-x-[rgba(70,163,88,0.1)] border-l border-solid border-r w-fit">
            <img className="w-[70px] " src="/images/png/flower1.png" alt="" />
            <h1 className="font-bold text-[17px] leading-[94%] text-[#3d3d3d] mt-4 mb-2">
              Plant Renovation
            </h1>
            <h3 className="font-normal text-sm leading-[157%] text-[#727272]">
              We are an online plant shop <br /> offering a wide range of cheap{" "}
              <br /> and trendy plants.
            </h3>
          </div>
          <div className="card  w-fit">
            <img className="w-[87px]" src="/images/png/flower2.png" alt="" />
            <h1 className="font-bold text-[17px] leading-[94%] text-[#3d3d3d] mt-4 mb-2">
              Watering Graden
            </h1>
            <h3 className="font-normal text-sm leading-[157%] text-[#727272]">
              We are an online plant shop <br /> offering a wide range of cheap{" "}
              <br />
              and trendy plants.
            </h3>
          </div>
        </div>
        <div className="rightform">
          <h1 className="font-bold text-lg leading-[89%] text-[#3d3d3d]">
            Would you like to join newsletters?
          </h1>
          <form className="my-4 shadow-[0_0_20px_0_rgba(0,0,0,0.06)] w-fit rounded-[6px] flex items-center h-10">
            <input
              className="h-full hover:outline-none px-3 py-3"
              placeholder="enter your email address..."
              type="email"
            />
            <button
              type="submit"
              className="bg-[#46A358] rounded-[0_6px_6px_0] text-white w-21 h-full"
            >
              Join
            </button>
          </form>
          <p className="font-normal text-[13px] leading-[169%] text-[#727272]">
            We usually post offers and challenges in newsletter. <br /> We’re
            your online houseplant destination. We offer a wide <br /> range of
            houseplants and accessories shipped directly <br /> from our
            (green)house to yours!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
