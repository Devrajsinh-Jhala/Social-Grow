import React from "react";

const BrandLogo = ({ image }) => {
  return (
    <div className="flex items-center justify-center m-10">
      <img
        className={`w-[128px] h-[36px] object-contain`}
        src={image}
        alt={image}
      />
    </div>
  );
};

export default BrandLogo;
