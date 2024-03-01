import React from "react";
import "./ChartUpdateButtons.css";

function ChartUpdateButtons(props) {
  return (
    <div className="ChartUpdateButtons">
      <button
        onClick={() => {
          props.getMarketChart(props.selectedCoin.id, 1);
        }}
      >
        24h
      </button>
      <button
        onClick={() => {
          props.getMarketChart(props.selectedCoin.id, 7);
        }}
      >
        7d
      </button>
      <button
        onClick={() => {
          props.getMarketChart(props.selectedCoin.id, 30);
        }}
      >
        30d
      </button>
      <button
        onClick={() => {
          props.getMarketChart(props.selectedCoin.id, 60);
        }}
      >
        60d
      </button>
    </div>
  );
}

export default ChartUpdateButtons;
