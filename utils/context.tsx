import { createContext, ReactNode, useEffect, useState } from "react";
import { addAskData, addBidData } from "./formatData";
import {
  ApiResponse,
  Data,
  OrderBook,
  ParsedData,
  Record,
  Token,
} from "./types";

type Order = "bids" | "asks";

export const OrderBookContext = createContext<OrderBook>({} as OrderBook);

const initialData = {
  bids: [
    {
      price: 0,
      quantity: 0,
      total: 0,
    },
  ],
  asks: [
    {
      price: 0,
      quantity: 0,
      total: 0,
    },
  ],
};

export function OrderBookProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ApiResponse>();
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [data, setData] = useState<ParsedData>(initialData);
  const [orderType, setOrderType] = useState<Order>("asks");
  const [payToken, setPayToken] = useState<Token | undefined>();
  const [receiveToken, setReceiveToken] = useState<Token | undefined>();
  const ORDER_LENGTH = orderType === "asks" ? 16 : 8;
  //console.log({ data });
  const getCurrentState = async () => {
    const url =
      "https://api.0x.org/orderbook/v1?quoteToken=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&baseToken=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

    try {
      setisLoading(true);
      const response = await fetch(url);

      const responseJSON = await response.json();
      setState(responseJSON);
      setData({
        ...data,
        bids: addBidData(responseJSON?.bids.records),
        asks: addAskData(responseJSON?.asks.records),
      });
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentState();
  }, []);
  // const getUpdate = (payload: Record[]) => {
  // setState({
  //   ...state!,
  //   asks: {
  //     ...state!.asks,
  //     records: [...state!.asks?.records!, ...payload],
  //   },
  // });
  // };

  const priceExists = (price: number) => {
    return data[orderType].some((data) => data.price === price);
  };

  const updateOrder = (price: number) => {
    const newOrderData = data[orderType].find((data) => data.price === price);
    const newOrderDataIndex = data[orderType].findIndex(
      (data) => data.price === price
    );
    const updatedData = { ...data };

    updatedData[orderType][newOrderDataIndex] = newOrderData as Data;
  
    if (newOrderDataIndex !== -1) {
    setData(updatedData);
    }
  };

  const removeOrder = (price: number, data: ParsedData) => {
    const newOrderData = data[orderType].filter((data) => data.price !== price);

    setData({
      ...data,
      [orderType]: newOrderData,
    });
  };

  const addOrder = (newData: Data[]) => {
    setData({ ...data, [orderType]: { ...data[orderType], ...newData } });
  };

  const getUpdate = (payload: Record[]) => {
    let takerAmount = payload[0].order.takerAmount;
    let makerAmount = payload[0].order.makerAmount;

    if (makerAmount > takerAmount) setOrderType("bids");

    let orderLength = state![orderType]?.records.length;

    // let socketData = {
    //   [orderType]:
    //     orderType === "asks" ? addAskData(payload) : addBidData(payload),
    // };
    let socketData =
      orderType === "asks" ? addAskData(payload) : addBidData(payload);
      console.log("price", socketData);
    // // If new quantity is zero - delete the order for that price level
    if (socketData[0].quantity === 0 && orderLength > ORDER_LENGTH) {
      removeOrder(socketData[0].price, data);
    } else {
      // If the price level exists and the quantity is not zero, update it
      if (priceExists(socketData[0].price)) {
        console.log("data", "Price dey oh");

        updateOrder(socketData[0].price);
      } else {
        //If the price level doesn't exist in the orderbook and there are less than order length, add it
        if (orderLength < ORDER_LENGTH) {
          addOrder(socketData);
        }
      }
    }
  };

  return (
    <OrderBookContext.Provider
      value={{
        state,
        data,
        isLoading,
        getCurrentState,
        getUpdate,
        payToken,
        receiveToken,
        setPayToken,
        setReceiveToken,
      }}
    >
      {children}
    </OrderBookContext.Provider>
  );
}
