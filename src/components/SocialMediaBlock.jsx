import React from "react";

const SocialMediaBlock = ({ Image, Heading, Description }) => {
  return (
    <div className="flex w-[401px] mb-10 flex-col items-center justify-between">
      <div>
        <img className=" m-8 w-[100px]" src={Image} alt={Image} />
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center">
        <h2 className="font-inter text-center tracking-normal  pb-4 leading-10 md:leading-5 text-[30px] md:text-[36px] font-extrabold">
          {Heading}
        </h2>
      </div>

      <div>
        <p className="px-10 text-center font-inter tracking-tight ">
          {" "}
          {Description}
        </p>
      </div>
    </div>
  );
};

export default SocialMediaBlock;
