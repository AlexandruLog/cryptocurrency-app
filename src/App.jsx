import React, { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./components/dropdown/Dropdown";
import Details from "./components/details/Details";
import Chart from "./components/chart/Chart";
import TopCoins from "./components/top-5/TopCoins";

const ROOT_URL = "https://api.coingecko.com/api/v3";
const KEY = import.meta.env.VITE_APP_API_KEY;

const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [historyPrices, setHistoryPrices] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState([]);
  const [available, setAvailable] = useState(false);

  async function getCoinsList() {
    try {
      const response = await fetch(
        `${ROOT_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&precision=2${KEY}`
      );
      const data = await response.json();
      setCoinsList(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMarketChart(id, interval) {
    try {
      const response = await fetch(
        `${ROOT_URL}/coins/${id}/market_chart?vs_currency=usd&days=${interval}&precision=2${KEY}`
      );
      const data = await response.json();
      setHistoryPrices(data.prices);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCoinsList();
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <Dropdown
          setAvailable={setAvailable}
          coinsList={coinsList}
          setSelectedCoin={setSelectedCoin}
          getMarketChart={getMarketChart}
        />
      </div>
      <div className="content">
        <div className="statistics">
          <Details
            selectedCoin={selectedCoin}
            getMarketChart={getMarketChart}
            available={available}
            USD={USD}
          />
          <Chart
            available={available}
            selectedCoin={selectedCoin}
            historyPrices={historyPrices}
          />
        </div>
        <div className="top-coins">
          <TopCoins
            setAvailable={setAvailable}
            coinsList={coinsList}
            setSelectedCoin={setSelectedCoin}
            getMarketChart={getMarketChart}
            USD={USD}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
