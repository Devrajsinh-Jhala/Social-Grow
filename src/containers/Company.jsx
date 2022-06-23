import React from "react";
import BrandLogo from "../components/BrandLogo";
import Amazon from "../assets/Amazon-logo-1.png";
import Nykaa from "../assets/Nykaa_Logo.png";
import Tiki from "../assets/download.png";
import Zomato from "../assets/Zomato_Logo.svg.png";
import Moj from "../assets/Moj-Logo.png";
import Rapido from "../assets/6e758deba2689e4122853b0b5e079e8e.png";
import Spotify from "../assets/Spotify_Logo_CMYK_Green.png";
import CoinDCX from "../assets/Coinfirm_CoinDCX_AML.png";
import TSeries from "../assets/T-series-logo.svg.png";
import Walkaroo from "../assets/walkaroo-logo.png";
import Trell from "../assets/Trell_New_Logo.png";
import BrandLogo2 from "../components/BrandLogo2";

const Company = () => {
  return (
    <div className="">
      <h2 className=" mt-10 md:mt-40 px-5 text-center font-inter w-full pb-4 leading-10 md:leading-5 text-[30px] md:text-[36px] font-extrabold">
        We work with best of the best
      </h2>

      <div className="flex cursor-pointer mt-5 px-5 gap-2 flex-col md:flex-row items-center justify-center">
        <BrandLogo image={Amazon} />
        <BrandLogo image={Nykaa} />
        <BrandLogo image={Tiki} />
        <BrandLogo image={Zomato} />
        <BrandLogo2 image={Rapido} />
        <BrandLogo2 image={Moj} />
      </div>
      <div className="flex cursor-pointer px-5 gap-3 flex-col md:flex-row items-center justify-center">
        <BrandLogo image={Spotify} />
        <BrandLogo2 image={CoinDCX} />
        <BrandLogo2 image={TSeries} />
        <BrandLogo image={Walkaroo} />
        <BrandLogo2 image={Trell} />
      </div>
    </div>
  );
};

export default Company;
