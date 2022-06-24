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
      <h2 className=" mt-8 md:mt-24 px-5 tracking-tight text-center font-inter w-full pb-4 leading-10 md:leading-5 text-[28px] md:text-[32px] font-extrabold">
        We work with the best in the business
      </h2>

      <div className="grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-6">
        <div>
          <BrandLogo image={Amazon} />
        </div>

        <div>
          <BrandLogo image={Nykaa} />
        </div>

        <div>
          <BrandLogo image={Tiki} />
        </div>

        <div>
          <BrandLogo image={Zomato} />
        </div>

        <div>
          <BrandLogo2 image={Rapido} />
        </div>

        <div>
          <BrandLogo2 image={Moj} />
        </div>
      </div>
      <div className="grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-6">
        <div>
          <BrandLogo image={Spotify} />
        </div>

        <div>
          <BrandLogo2 image={CoinDCX} />
        </div>

        <div>
          <BrandLogo2 image={TSeries} />
        </div>

        <div>
          <BrandLogo image={Walkaroo} />
        </div>

        <div>
          <BrandLogo2 image={Trell} />
        </div>
      </div>
    </div>
  );
};

export default Company;
