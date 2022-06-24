import React from "react";

const Button = (props) => {
  return (
    <button className="bg-[#e15353] rounded-full text-white font-inter py-2 px-6 md:ml-4 hover:bg-indogo-400 duration-500">
      {props.children}
    </button>
  );
};

export default Button;
