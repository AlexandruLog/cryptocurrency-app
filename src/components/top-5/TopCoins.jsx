import React, { useContext } from "react";
import "./TopCoins.css";
import { AppContext } from "../../App";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CircularProgress from "@mui/material/CircularProgress";

function TopCoins() {
  const {
    USD,
    setDays,
    coinsList,
    setSelectedCoin,
    setAvailable,
    getMarketChart,
    topCoinsVisibility,
  } = useContext(AppContext);
  return (
    <div className="TopCoins">
      {topCoinsVisibility ? (
        <>
          <h2>Top 5 Coins</h2>
          <table border={0} cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Logo</th>
                <th>
                  <span>
                    ATH
                    <TrendingUpIcon />
                  </span>
                </th>
                <th>
                  <span>
                    ATL
                    <TrendingDownIcon />
                  </span>
                </th>
                <th>Market Cap</th>
                <th>
                  <span>
                    Price
                    <AttachMoneyIcon />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {coinsList.map((coin, index) =>
                index < 5 ? (
                  <tr
                    key={index}
                    onClick={() => {
                      setDays(1);
                      setAvailable(true);
                      setSelectedCoin(coin);
                      getMarketChart(coin.id, 1);
                    }}
                  >
                    <td>#{coin.market_cap_rank}</td>
                    <td>{coin.name}</td>
                    <td>
                      <img src={coin.image} alt="logo" />
                    </td>
                    <td>{USD.format(coin.ath)}</td>
                    <td>{USD.format(coin.atl)}</td>
                    <td>{USD.format(coin.market_cap)}</td>
                    <td>{USD.format(coin.current_price)}</td>
                    <td>
                      <AdsClickIcon fontSize="medium" />
                    </td>
                  </tr>
                ) : (
                  ""
                )
              )}
            </tbody>
          </table>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default TopCoins;
