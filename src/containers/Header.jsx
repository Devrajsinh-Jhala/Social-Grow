import React from "react";
import Web from "../assets/Modified Banner Image.png";

const Header = () => {
  return (
    <div>
      <div className=" py-2 mt-20 md:mt-8  flex flex-col items-center text-center justify-center min-h-full max-w-full">
        <h1 className=" px-5 py-2 md:py-7 md:w-[700px] text-center ">
          <span className="bg-gradient-to-r  from-[#ff5f5f] to-[#5b8dfe] text-transparent bg-clip-text tracking-tightest leading-tight font-extrabold text-[40px] md:text-[50px] font-inter">
            Welcome to the era of influencer marketing
          </span>
        </h1>

        <p className="px-5 py-2 tracking-tight leading-6 text-center font-inter md:w-[800px]">
          <span>
            In our fast-moving, digital world, it is becoming increasingly
            difficult for companies to gain the trust and interest of customers
            in the long term. <strong>Here we start.</strong>
          </span>
        </p>

        <div className=" mt-10 md:mt-20 mb-5 object-cover">
          <img src={Web} alt={Web} />
        </div>
      </div>
    </div>
  );
};

export default Header;
