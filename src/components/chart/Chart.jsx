import React, { useContext } from "react";
import "./Chart.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import reactLogo from "../../assets/react.svg";
import { AppContext } from "../../App";
import moment from "moment";

function Chart() {
  const { available, selectedCoin, historyPrices, days } =
    useContext(AppContext);

  return (
    <div className="Chart">
      {available ? (
        <>
          <Line
            data={{
              labels: historyPrices.map((data) =>
                moment(data[0]).format("DD MMM hh:mm:ss")
              ),
              datasets: [
                {
                  label: selectedCoin.name,
                  data: historyPrices.map((data) => data[1]),
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
                title: {
                  display: true,
                  text: `${days > 1 ? `Last ${days} days` : "Last 24h"}`,
                  align: "start",
                  color: "white",
                  font: {
                    size: 18,
                    family: "Kode Mono",
                    weight: "bold",
                  },
                },
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
