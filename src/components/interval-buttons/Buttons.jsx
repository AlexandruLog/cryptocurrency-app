import React, { useContext } from "react";
import "./Buttons.css";
import { AppContext } from "../../App";

function Buttons() {
  const { selectedCoin, getMarketChart, setDays } = useContext(AppContext);
  return (
    <div className="Buttons">
      <button
        onClick={() => {
          setDays(1);
          getMarketChart(selectedCoin.id, 1);
        }}
      >
        24h
      </button>
      <button
        onClick={() => {
          setDays(7);
          getMarketChart(selectedCoin.id, 7);
        }}
      >
        7d
      </button>
      <button
        onClick={() => {
          setDays(30);
          getMarketChart(selectedCoin.id, 30);
        }}
      >
        30d
      </button>
      <button
        onClick={() => {
          setDays(60);
          getMarketChart(selectedCoin.id, 60);
        }}
      >
        60d
      </button>
    </div>
  );
}

export default Buttons;
