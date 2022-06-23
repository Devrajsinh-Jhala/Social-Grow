import React from "react";

const BrandLogo2 = ({ image }) => {
  return (
    <div className="py-5 px-2">
      <img
        className="w-[140px] h-[80px] object-contain"
        src={image}
        alt={image}
      />
    </div>
  );
};

export default BrandLogo2;
