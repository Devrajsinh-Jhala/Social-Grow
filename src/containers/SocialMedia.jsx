import React from "react";
import SocialMediaBlock from "../components/SocialMediaBlock";

const SocialMedia = () => {
  return (
    <>
      <h2 className=" mt-10 md:mt-40 pt-10 px-5 text-center font-damion w-full pb-4 leading-10 md:leading-5 text-[40px] md:text-[56px] font-extrabold">
        Social Media
      </h2>
      <h2 className=" pt-10 px-5 text-center font-inter w-full pb-4 leading-9 md:leading-5 text-[25px] md:text-[30px] font-extrabold">
        Facts and Figures
      </h2>
      <div className="flex w-full flex-col md:flex-row items-center justify-center">
        <div>
          <SocialMediaBlock />
        </div>
        <div>
          <SocialMediaBlock />
        </div>
        <div>
          <SocialMediaBlock />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
