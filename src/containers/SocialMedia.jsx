import React from "react";
import SocialMediaBlock from "../components/SocialMediaBlock";
import Vector from "../assets/Vector.png";
import Group1 from "../assets/Group 1.png";
import Group2 from "../assets/Group 2.png";

const SocialMedia = () => {
  return (
    <>
      <h2 className=" mt-10 md:mt-24 pt-10 px-5 text-center font-waterBrush w-full pb-4 leading-10 md:leading-5 text-[50px] md:text-[66px]">
        Social Media
      </h2>
      <h2 className=" -mt-5 md:mt-2 px-5 text-center font-inter w-full pb-4 leading-9 md:leading-5 text-[20px] md:text-[25px] ">
        facts and figures
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div>
          <SocialMediaBlock
            Image={Vector}
            Heading={"4.6B"}
            Description={
              " 4.62 billion people around the world now use social media everyday with an average daily time of 2 hours 27 minutes."
            }
          />
        </div>
        <div>
          <SocialMediaBlock
            Image={Group1}
            Heading={"16.4B"}
            Description={
              "Brands are projected to spend $16.4 billion on influencer marketing during 2022 up from $13.8 billion in 2021"
            }
          />
        </div>
        <div>
          <SocialMediaBlock
            Image={Group2}
            Heading={"79% "}
            Description={
              "79% of brands consider Instagram as the most important platform for influencer marketing campaigns"
            }
          />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
