import Image from "next/image";
import React, { useContext, useEffect } from "react";
import useSocket from "../hooks/useSocket";
import { OrderBookContext } from "../utils/context";
import { formatter } from "../utils/formatNumber";
import Back from "../assets/icons/arrow-left.svg"

function OrderBook({back}: {back: VoidFunction}) {
  const { getCurrentState, state } = useContext(OrderBookContext);

  useEffect(() => {
    getCurrentState();
  }, []);

  useSocket();

  return (
    <div className="bg-[#000] w-full h-screen">
      <div className="flex items-center cursor-pointer" onClick={back}>
        <Image src={Back} alt="back" width={40} height={40}/>
        <p className="text-white text-xl">Back</p>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="m-2">
          <table className="table-auto w-full">
            <thead className="p-0 m-0">
              <tr>
                <th className="text-[#adb1b8] text-left">Price(USDC)</th>
                <th className="text-[#adb1b8] text-right">Quantity(WETH)</th>
                <th className="text-[#adb1b8] text-right">Total(WETH)</th>
              </tr>
            </thead>
            <tbody>
              {state &&
                state.bids.records.map((bids) => (
                  <tr key={bids.metaData.orderHash}>
                    <td className="w-[50px] mr-2">
                      <p className="text-[12px] text-[#20b26c]">
                        {formatter.format(
                          Number(bids.order.makerAmount) /
                            Number(bids.order.takerAmount) /
                            (Number(bids.order.takerAmount) /
                              Number(bids.order.takerTokenFeeAmount))
                        )}
                      </p>
                    </td>
                    <td className=" text-right bg-[#cc3939]">
                      <p className="text-[12px] text-white">
                        {Number(bids.order.takerAmount) /
                          Number(bids.order.takerTokenFeeAmount)}
                      </p>
                    </td>
                    <td className=" text-right bg-[rgba(36,174,100,0.5)]">
                      <p className="text-[12px] text-white">
                        {" "}
                        {Number(bids.order.takerAmount)}
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="m-2">
          <table className="table-auto w-full">
            <thead className="p-0 m-0">
              <tr>
                <th className="text-[#adb1b8] text-left">Total(WETH)</th>
                <th className="text-[#adb1b8] text-left">Quantity(WETH)</th>
                <th className="text-[#adb1b8]">Price(USDC)</th>
              </tr>
            </thead>
            <tbody>
              {state &&
                state.asks.records.map((asks) => (
                  <tr key={asks.metaData.orderHash}>
                    <td className="bg-[#cc3939]">
                      <p className="text-[12px] text-white">22, 000</p>
                    </td>
                    <td className="bg-[rgba(36,174,100,0.5)]">
                      <p className="text-[12px] text-white">22, 000</p>
                    </td>
                    <td className="w-[50px] text-right">
                      <p className="text-[12px] text-[#ef454a]">
                        {formatter.format(
                          Number(asks.order.takerAmount) /
                            Number(asks.order.makerAmount)
                        )}
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderBook;
