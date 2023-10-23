import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>Home</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </div>
  );
};

export default Home;

//for the navigate we can pass second argument saying replace = true ,
//if we again come back to this page we are replacing instead of pushing
//
