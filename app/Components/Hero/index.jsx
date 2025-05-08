import Image from "next/image";
import { Carousel } from "antd";

const contentStyle = {
  color: "#fff",
  background: "rgba(128,128,128,0.101)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
};

const Index = () => {
  return (
    <div className="my-3">
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
        <div>
          <div
            className="flex items-center justify-between relative px-4 "
            style={contentStyle}
          >
            <div className="left max-w-[575px] text-black flex flex-col gap-2 w-full">
              <h3 className="font-medium text-sm leading-[114%] tracking-widest uppercase text-[#3d3d3d]">
                Welcome to GreenShop
              </h3>
              <h1 className="font-black text-[70px] max-[1072px]:text-[45px] max-[808px]:text-[30px] leading-[100%] uppercase text-[#3d3d3d] max-w-[500px]::text-[16px]">
                Let’s Make a Better{" "}
                <span className="text-[#46a358]">Planet</span>
              </h1>
              <p className="font-normal max-[972px]:text-[12px] text-sm leading-[171%] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create a unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="cursor-pointer border text-white bg-[#46a358] w-fit text-[16px] py-2 max-[881px]:mt-2 mt-9 px-6 rounded-[6px]">
                SHOP NOW
              </button>
            </div>
            <div className="right flex justify-center items-center w-full md:w-auto">
              <Image
                src="/images/hero.png"
                alt="GreenShop Hero"
                width={500}
                height={450}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex items-center justify-between relative px-4 "
            style={contentStyle}
          >
            <div className="left max-w-[575px] text-black flex flex-col gap-2 w-full">
              <h3 className="font-medium text-sm leading-[114%] tracking-widest uppercase text-[#3d3d3d]">
                Welcome to GreenShop
              </h3>
              <h1 className="font-black text-[70px] max-[1072px]:text-[45px] max-[808px]:text-[30px] leading-[100%] uppercase text-[#3d3d3d] max-w-[500px]::text-[16px]">
                Let’s Make a Better{" "}
                <span className="text-[#46a358]">Planet</span>
              </h1>
              <p className="font-normal max-[972px]:text-[12px] text-sm leading-[171%] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create a unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="cursor-pointer border text-white bg-[#46a358] w-fit text-[16px] py-2 max-[881px]:mt-2 mt-9 px-6 rounded-[6px]">
                SHOP NOW
              </button>
            </div>
            <div className="right flex justify-center items-center w-full md:w-auto">
              <Image
                src="/images/hero.png"
                alt="GreenShop Hero"
                width={500}
                height={450}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex items-center justify-between relative px-4 "
            style={contentStyle}
          >
            <div className="left max-w-[575px] text-black flex flex-col gap-2 w-full">
              <h3 className="font-medium text-sm leading-[114%] tracking-widest uppercase text-[#3d3d3d]">
                Welcome to GreenShop
              </h3>
              <h1 className="font-black text-[70px] max-[1072px]:text-[45px] max-[808px]:text-[30px] leading-[100%] uppercase text-[#3d3d3d] max-w-[500px]::text-[16px]">
                Let’s Make a Better{" "}
                <span className="text-[#46a358]">Planet</span>
              </h1>
              <p className="font-normal max-[972px]:text-[12px] text-sm leading-[171%] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create a unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="cursor-pointer border text-white bg-[#46a358] w-fit text-[16px] py-2 max-[881px]:mt-2 mt-9 px-6 rounded-[6px]">
                SHOP NOW
              </button>
            </div>
            <div className="right flex justify-center items-center w-full md:w-auto">
              <Image
                src="/images/hero.png"
                alt="GreenShop Hero"
                width={500}
                height={450}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Index;
