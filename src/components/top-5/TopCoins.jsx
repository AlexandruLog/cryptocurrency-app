import React from "react";
import "./TopCoins.css";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function TopCoins(props) {
  return (
    <div className="TopCoins">
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
          {props.coinsList.map((coin, index) =>
            index < 5 ? (
              <tr
                key={index}
                onClick={() => {
                  props.setAvailable(true);
                  props.setSelectedCoin(coin);
                  props.getMarketChart(coin.id, 1);
                }}
              >
                <td>#{coin.market_cap_rank}</td>
                <td>{coin.name}</td>
                <td>
                  <img src={coin.image} alt="logo" />
                </td>
                <td>{props.USD.format(coin.ath)}</td>
                <td>{props.USD.format(coin.atl)}</td>
                <td>{props.USD.format(coin.market_cap)}</td>
                <td>{props.USD.format(coin.current_price)}</td>
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
    </div>
  );
}

export default TopCoins;
