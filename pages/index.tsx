import type { NextPage } from "next";
import { useState } from "react";
import OrderBook from "../components/OrderBook";
import TradingSelector from "../components/TradingSelector";
import { OrderBookProvider } from "../utils/context";

type activeStepType = "selector" | "order";

const Home: NextPage = () => {
  const [activeStep, setActiveStep] = useState<activeStepType>("selector");

  const onContinue = () => setActiveStep("order");
  const goBack = () => setActiveStep("selector");

  return (
    <OrderBookProvider>
      <div>
        {activeStep === "selector" && (
          <TradingSelector onContinue={onContinue} />
        )}
        {activeStep === "order" && <OrderBook back={goBack} />}
      </div>
    </OrderBookProvider>
  );
};

export default Home;