import React, { useEffect, useState, createContext } from "react";
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

export const AppContext = createContext();

function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [available, setAvailable] = useState(false);
  const [topCoinsVisibility, setTopCoinsVisiblity] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState([]);
  const [days, setDays] = useState(1);
  const [historyPrices, setHistoryPrices] = useState([]);

  async function getCoinsList() {
    try {
      const response = await fetch(
        `${ROOT_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&precision=2${KEY}`
      );
      const data = await response.json();
      setCoinsList(data);
      setStartIndex(Math.floor(Math.random() * (data.length / 2)));
      setTopCoinsVisiblity(true);
      console.log(data);
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
      <AppContext.Provider
        value={{
          USD,
          coinsList,
          startIndex,
          available,
          setAvailable,
          selectedCoin,
          setSelectedCoin,
          getMarketChart,
          historyPrices,
          days,
          setDays,
          topCoinsVisibility,
        }}
      >
        <div className="navbar">
          <Dropdown />
        </div>
        <div className="content">
          <div className="statistics">
            <Details />
            <Chart />
          </div>
          <div className="top-coins">
            <TopCoins />
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
