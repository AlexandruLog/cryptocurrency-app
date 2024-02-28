import React, { useContext } from "react";
import "./Details.css";
import Buttons from "../interval-buttons/Buttons";
import { AppContext } from "../../App";

function Details() {
  const { selectedCoin, available, USD } = useContext(AppContext);
  return (
    <div className="Details">
      {available ? (
        <>
          <div className="header">
            <div className="coin name">
              <h1>{selectedCoin.name}</h1>
              <img src={selectedCoin.image} alt="logo" />
            </div>
          </div>
          <div className="main">
            <div className="about row-1">
              <div className="coin symbol">
                <h3>Symbol</h3>
                <p>{selectedCoin.symbol}</p>
              </div>
              <div className="coin ath">
                <h3>ATH</h3>
                <p>{USD.format(selectedCoin.ath)}</p>
              </div>
              <div className="coin atl">
                <h3>ATL</h3>
                <p>{USD.format(selectedCoin.atl)}</p>
              </div>
              <div className="coin price-change-last-24h">
                <h3>Last 24h</h3>
                <p>{`${selectedCoin.price_change_percentage_24h}%`}</p>
              </div>
            </div>
            <div className="about row-2">
              <div className="coin symbol">
                <h3>Rank</h3>
                <p>#{selectedCoin.market_cap_rank}</p>
              </div>
              <div className="coin ath">
                <h3>Market Cap</h3>
                <p>{USD.format(selectedCoin.market_cap)}</p>
              </div>
              <div className="coin atl">
                <h3>Price </h3>
                <p>{USD.format(selectedCoin.current_price)}</p>
              </div>
            </div>
            <Buttons />
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
