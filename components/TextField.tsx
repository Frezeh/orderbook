import Image from "next/image";
import { forwardRef, InputHTMLAttributes, useContext, useState } from "react";

import Dropdown from "../assets/icons/drop-down.svg";
import { OrderBookContext } from "../utils/context";
import Modal from "./Modal";

type HTMLInputType = InputHTMLAttributes<HTMLInputElement>;

interface Props extends HTMLInputType {
  label: "You Pay" | "You Receive";
  balance?: string;
}

function TextField(props: Props, ref: any) {
  const { label, balance, ...rest } = props;
  const { payToken, receiveToken } = useContext(OrderBookContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-full px-5">
      <label
        htmlFor={"input"}
        className="block mb-[8px] text-[18px] font-semibold"
      >
        {label}
      </label>

      <div className="flex justify-between items-center gap-14">
        <div
          className="flex cursor-pointer gap-2 hover:bg-[#f7f7ff] hover:rounded-md p-1 ease-linear transition-all duration-150"
          onClick={() => setShowModal(true)}
        >
          {label === "You Pay" && payToken?.imageUrl && (
            <div className="w-6 mt-1">
              <Image
                src={payToken?.imageUrl}
                alt="currency"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
          )}

          {label === "You Receive" && receiveToken?.imageUrl && (
            <div className="w-6 mt-1">
              <Image
                src={receiveToken?.imageUrl}
                alt="currency"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
          )}

          <p className="text-[22px] font-bold pr-1">
            {(label === "You Pay" ? payToken?.name : receiveToken?.name) ??
              "Choose Token"}
          </p>
          <Image src={Dropdown} alt="currency" className="" />
        </div>

        {showModal && <Modal set={setShowModal} title={label} type={label} />}

        <div className="w-[150px] px-[16px] y-[10px] rounded-[12px] border border-[#0000001F] bg-[#f7f7ff] focus-within:border-[#706eff] transition-all">
          <div>
            <input
              className="w-full bg-transparent outline-none text-[22px] placeholder:text-[#7578b5] text-right"
              ref={ref}
              id={"input"}
              {...rest}
              type={"number"}
            />
          </div>

          <p className="text-right text-[#7578b5]">{balance}</p>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(TextField);
