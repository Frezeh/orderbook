import React from "react";
import Button from "./Button";
import Card from "./Card";
import DoubleInputContainer from "./DoubleInputContainer";
import TextField from "./TextField";

function TradingSelector({ onContinue }: { onContinue: VoidFunction }) {
  return (
    <div className="flex justify-center items-center mt-10">
      <Card title="Market">
        <div className="py-[10px]">
          <DoubleInputContainer
            first={
              <TextField label="You Pay" placeholder="0" balance={"$400.00"} />
            }
            second={
              <TextField
                label="You Receive"
                placeholder="0"
                balance={"$10.00"}
              />
            }
          />
        </div>
        <Button onClick={onContinue} />
      </Card>
    </div>
  );
}

export default TradingSelector;
