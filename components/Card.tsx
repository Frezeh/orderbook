import * as React from "react";

interface CardProps
  extends Omit<React.BaseHTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
}

function Card(props: React.PropsWithChildren<CardProps>) {
  const { title } = props;

  return (
    <div className="bg-white border border-[rgba(232, 236, 253)] rounded-[20px] shadow-xl relative w-[420px]">
      <div className="flex px-5 py-3 items-center border-b border-b-[rgba(232, 236, 253)]">
        <div className="flex flex-col after:border-b-2 after:border-b-[#706eff] after:mb-[-12px] after:mt-3 cursor-pointer">
          <h1 className="text-[18px] font-bold">{title}</h1>
        </div>
      </div>

      {props.children}
    </div>
  );
}

export default Card;
