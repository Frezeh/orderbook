import React from "react";

function Button({ onClick }: { onClick: VoidFunction }) {
  return (
    <div
      className="flex justify-center items-center bg-[#706eff] transition-all hover:bg-[#816eff] my-5 mx-5 rounded-xl shadow-[rgb(0 0 0 / 8%) 0px 3px 8px, rgb(0 0 0 / 16%) 0px 1px 2px, rgb(255 255 255 / 10%) 0px 4px 9px inset] cursor-pointer h-[60px]"
      onClick={onClick}
    >
      <p className="text-[#FFFF] font-bold text-[18px]">Order book</p>
    </div>
  );
}

export default Button;
