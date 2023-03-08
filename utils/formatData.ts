import { useContext } from "react";
import { OrderBookContext } from "./context";
import { ApiResponse, Data, Record } from "./types";

export const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const addBidData = (state: Record[] | undefined) => {
  const data: Data[] = [];

  state &&
    state.forEach((bid) => {
      let computedPrice =
        Number(bid.order.takerAmount) /
        (Number(bid.order.makerAmount) / 1000000000000);

      let computedQuantity =
        Number(bid.order.makerAmount) /
        (Number(bid.order.takerAmount) /
          (Number(bid.order.makerAmount) / 1000000000000));

      let computedTotal = Number(bid.order.makerAmount);

      data.push({
        price: computedPrice,
        quantity: computedQuantity,
        total: computedTotal,
      });
    });

  return data;
};

export const addAskData = (state: Record[] | undefined) => {
  const data: Data[] = [];

  state &&
    state.forEach((ask) => {
      let computedPrice =
        Number(ask.order.makerAmount) /
        (Number(ask.order.takerAmount) / 1000000000000);

      let computedQuantity =
        Number(ask.order.takerAmount) /
        Number(ask.order.makerAmount) /
        (Number(ask.order.takerAmount) / 1000000000000);

      let computedTotal = Number(ask.order.takerAmount);

      data.push({
        price: computedPrice,
        quantity: computedQuantity,
        total: computedTotal,
      });
    });

  return data;
};

export const maxAskTotal = () => {
  const { data } = useContext(OrderBookContext) ?? [];

  const total: number[] = [];

  data.asks.forEach((ask) => {
    total.push(Number(ask.total));
  });

  return Math.max.apply(Math, total);
};

export const maxAskQuantity = () => {
  const { data } = useContext(OrderBookContext) ?? [];

  const total: number[] = [];

  data.asks.forEach((ask) => {
    total.push(Number(ask.quantity));
  });

  return Math.max.apply(Math, total);
};

export const maxBidTotal = () => {
  const { data } = useContext(OrderBookContext) ?? [];

  const total: number[] = [];

  data.bids.forEach((bid) => {
    total.push(Number(bid.total));
  });

  return Math.max.apply(Math, total);
};

export const maxBidQuantity = () => {
  const { data } = useContext(OrderBookContext) ?? [];

  const total: number[] = [];

  data.bids.forEach((bid) => {
    total.push(Number(bid.quantity));
  });

  return Math.max.apply(Math, total);
};
