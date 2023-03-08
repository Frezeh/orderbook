import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { OrderBookContext } from "../utils/context";
import {
  maxBidTotal,
  maxBidQuantity,
  maxAskTotal,
  maxAskQuantity,
  formatter,
} from "../utils/formatData";
import Back from "../assets/icons/arrow-left.svg";
import Skeleton from "./Skeleton";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

function OrderBook({ back }: { back: VoidFunction }) {
  const { getUpdate, data, isLoading } = useContext(OrderBookContext);
  const websocketUrl = "wss://api.0x.org/orderbook/v1";

  // useEffect(() => {
  //   getCurrentState();
  // }, []);

  //useSocket();
  const { sendJsonMessage, getWebSocket } = useWebSocket(websocketUrl, {
    onOpen: () => console.log("WebSocket connection opened."),
    onClose: () => console.log("WebSocket connection closed."),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event: WebSocketEventMap["message"]) => {
      const response = JSON.parse(event.data);
      // console.log("data", response);

      getUpdate(response.payload);

    },
  });

  useEffect(() => {
    const subscribeMessage = {
      type: "subscribe",
      channel: "orders",
      requestId: "123e4567-e89b-12d3-a456-426655440000",
    };
    sendJsonMessage(subscribeMessage);

    return () => getWebSocket()?.close();
  }, [sendJsonMessage, getWebSocket]);

  return (
    <div className="bg-[#000] w-screen">
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <div
            className="fixed flex items-center cursor-pointer"
            onClick={back}
          >
            <Image src={Back} alt="back" width={40} height={40} />
            <p className="text-white text-xl">Back</p>
          </div>

          <div className="grid grid-cols-2 gap-10 tablet:flex flex-col w-screen h-screen bg-[#000] overflow-y-auto">
            <div className="mx-2 mt-12">
              <table className="table-auto w-full">
                <thead className="p-0 m-0">
                  <tr>
                    <th className="text-[#adb1b8] text-left">Price(USDC)</th>
                    <th className="text-[#adb1b8] text-right">
                      Quantity(WETH)
                    </th>
                    <th className="text-[#adb1b8] text-right">Total(WETH)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.bids.map((bid, i) => (
                    <tr className="h-[25px]" key={i}>
                      <td className="w-[50px] mr-2">
                        <p className="text-[12px] p-0.5 text-[#20b26c]">
                          {formatter.format(bid.price)}
                        </p>
                      </td>

                      <td className="text-right">
                        <div className="w-full flex flex-row-reverse">
                          <div
                            className="bg-[#004a27] m-0.5 text-[12px] text-white text-right flex flex-row-reverse"
                            style={{
                              width: `${
                                (Number(bid.quantity) / maxBidQuantity()) * 100
                              }%`,
                            }}
                          >
                            {formatter.format(bid.quantity)}
                          </div>
                        </div>
                      </td>

                      <td className="text-right">
                        <div className="w-full flex flex-row-reverse">
                          <div
                            className="bg-[#004a27] m-0.5 text-[12px] text-white text-right flex flex-row-reverse"
                            style={{
                              width: `${
                                (Number(bid.total) / maxBidTotal()) * 100
                              }%`,
                            }}
                          >
                            {formatter.format(bid.total)}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mx-2 mt-12">
              <table className="table-auto w-full">
                <thead className="p-0 m-0">
                  <tr>
                    <th className="text-[#adb1b8] text-left">Total(WETH)</th>
                    <th className="text-[#adb1b8] text-left">Quantity(WETH)</th>
                    <th className="text-[#adb1b8]">Price(USDC)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.asks.map((ask, i) => (
                    <tr className="h-[25px]" key={i}>
                      <td>
                        <div className="w-full flex flex-row">
                          <div
                            className="bg-[#772225] m-0.5 text-[12px] text-white text-left"
                            style={{
                              width: `${
                                (Number(ask.total) / maxAskTotal()) * 100
                              }%`,
                            }}
                          >
                            {formatter.format(ask.total)}
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="w-full flex flex-row">
                          <div
                            className="bg-[#772225] m-0.5 text-[12px] text-white text-left"
                            style={{
                              width: `${
                                (Number(ask.quantity) / maxAskQuantity()) * 100
                              }%`,
                            }}
                          >
                            {formatter.format(ask.quantity)}
                          </div>
                        </div>
                      </td>

                      <td className="w-[50px] text-right ml-2">
                        <p className="text-[12px] p-0.5 text-[#ef454a]">
                          {formatter.format(ask.price)}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderBook;
