import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const naivgate = useNavigate();
  return (
    <div className="App">
      <div>Order Confirmed!</div>
      <button onClick={() => naivgate(-1)}>Go back</button>
    </div>
  );
};

export default OrderSummary;
