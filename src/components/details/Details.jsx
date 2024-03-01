import React from "react";
import "./Details.css";
import ChartUpdateButtons from "../interval-buttons/ChartUpdateButtons";

function Details(props) {
  return (
    <div className="Details">
      {props.available ? (
        <>
          <div className="header">
            <div className="coin name">
              <h1>{props.selectedCoin.name}</h1>
              <img src={props.selectedCoin.image} alt="logo" />
            </div>
          </div>
          <div className="main">
            <div className="about row-1">
              <div className="coin symbol">
                <h3>Symbol</h3>
                <p>{props.selectedCoin.symbol}</p>
              </div>
              <div className="coin ath">
                <h3>ATH</h3>
                <p>{props.USD.format(props.selectedCoin.ath)}</p>
              </div>
              <div className="coin atl">
                <h3>ATL</h3>
                <p>{props.USD.format(props.selectedCoin.atl)}</p>
              </div>
              <div className="coin price-change-last-24h">
                <h3>Last 24h</h3>
                <p>{`${props.selectedCoin.price_change_percentage_24h}%`}</p>
              </div>
            </div>
            <div className="about row-2">
              <div className="coin symbol">
                <h3>Rank</h3>
                <p>#{props.selectedCoin.market_cap_rank}</p>
              </div>
              <div className="coin ath">
                <h3>Market Cap</h3>
                <p>{props.USD.format(props.selectedCoin.market_cap)}</p>
              </div>
              <div className="coin atl">
                <h3>Price </h3>
                <p>{props.USD.format(props.selectedCoin.current_price)}</p>
              </div>
            </div>
            <ChartUpdateButtons
              selectedCoin={props.selectedCoin}
              getMarketChart={props.getMarketChart}
            />
          </div>
        </>
      ) : (
        <>
          <h1>Hello World</h1>
        </>
      )}
    </div>
  );
}

export default Details;
