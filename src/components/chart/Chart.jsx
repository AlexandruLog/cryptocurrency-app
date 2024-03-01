import React from "react";
import "./Chart.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import reactLogo from "../../assets/react.svg";
import moment from "moment";

function Chart(props) {
  return (
    <div className="Chart">
      {props.available ? (
        <>
          <Line
            data={{
              labels: props.historyPrices.map((data) =>
                moment(data[0]).format("DD MMM hh:mm:ss")
              ),
              datasets: [
                {
                  label: props.selectedCoin.name,
                  data: props.historyPrices.map((data) => data[1]),
                  fill: true,
                  borderWidth: 1.5,
                  pointRadius: 0.5,
                  pointHoverRadius: 16,
                  tension: 0.2,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              interaction: {
                intersect: false,
                mode: "index",
              },
              plugins: {
                legend: {
                  labels: {
                    color: "white",
                    font: {
                      size: 14,
                    },
                  },
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  ticks: {
                    color: "white",
                    callback: function (value) {
                      return "$" + Math.round(value);
                    },
                  },
                },
              },
            }}
          />
        </>
      ) : (
        <div className="welcome-chart">
          <img src={reactLogo} alt="react logo" />
        </div>
      )}
    </div>
  );
}

export default Chart;
