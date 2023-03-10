import { useEffect, useCallback, useContext } from "react";
import { OrderBookContext } from "../utils/context";
import { Socket } from "../utils/types";

function useSocket() {
  const { data, getUpdate, state } = useContext(OrderBookContext);

  const url =
    "https://api.0x.org/orderbook/v1?quoteToken=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&baseToken=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
  const websocketUrl = "wss://api.0x.org/orderbook/v1";

  const parseMessage = useCallback(
    (message: Socket) => {
      const { payload } = message;
      getUpdate(payload);
    },
    [data]
  );

  useEffect(() => {
    const ws = new WebSocket(websocketUrl);
    ws.onopen = () => {
      //console.log("Web socket connected");
      ws.send(
        JSON.stringify({
          type: "subscribe",
          channel: "orders",
          requestId: "123e4567-e89b-12d3-a456-426655440000",
        })
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      //console.log(data)
      parseMessage(data);
    };

    ws.onerror = (err) => {
      console.log({ err });
    };

    return () => ws.close();
  }, [parseMessage, url]);
}

export default useSocket;
