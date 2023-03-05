import Image from "next/image";
import { ReactNode, useState } from "react";

import Icon from "../assets/icons/arrow-up.svg";

interface Props {
  first: ReactNode;
  second: ReactNode;
}
export default function DoubleInputContainer(props: Props) {
  const { first, second } = props;
  const [swapped, setSwapped] = useState(false);
  
  const toggleSwapped = () => {
    setSwapped((s) => !s);
  };

  return (
    <div>
      <div
        className={`mt-[8px] flex flex-col gap-10 ${
          swapped ? "flex-col-reverse" : ""
        }`}
      >
        {first}

        <div className="flex justify-between">
          <div className="bg-[#E8EBEC] h-[1px] w-[45%]"></div>
          <button
            type="button"
            onClick={toggleSwapped}
            className="w-[34px] h-[34px] mt-[-15px] mb-[-15px] z-10 self-center flex items-center justify-center rounded-[24px] bg-white border border-[rgba(232, 236, 253)]"
          >
            <Image src={Icon} alt={"icon"} />
          </button>
          <div className="bg-[#E8EBEC] h-[1px] w-[45%]"></div>
        </div>

        {second}
      </div>
    </div>
  );
}
