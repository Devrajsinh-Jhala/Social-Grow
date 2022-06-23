import React from "react";
import TSeries from "../assets/T-series-logo.svg.png";
import BrandLogo2 from "./BrandLogo2";

const SocialMediaBlock = () => {
  return (
    <div className="flex m-5 mb-10 flex-col items-center justify-center">
      <div>
        <BrandLogo2 image={TSeries} />
      </div>

      <div>
        <h2 className="font-inter text-center w-full tracking-normal  pb-4 leading-10 md:leading-5 text-[30px] md:text-[36px] font-extrabold">
          98.6%
        </h2>
      </div>

      <div>
        <p className="px-5 text-center font-inter tracking-widest leading-7 ">
          {" "}
          3,5 MILLIARDEN AKTIVE SOCIAL MEDIA USER TÄGLICH
        </p>
      </div>
    </div>
  );
};

export default SocialMediaBlock;
