import React, { useState, useContext, useEffect } from "react";
import "./Dropdown.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { AppContext } from "../../App";

function Dropdown() {
  const {
    coinsList,
    startIndex,
    setAvailable,
    setSelectedCoin,
    getMarketChart,
    setDays,
  } = useContext(AppContext);

  const [active, setActive] = useState(false);

  function toggleDropdown() {
    setActive(!active);
  }

  return (
    <div className="Dropdown">
      <div
        className={`dropdown-btn ${active ? "active-border" : ""}`}
        onClick={toggleDropdown}
      >
        <h3>Coins</h3>
        {active ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </div>

      <div className={`dropdown-items ${active ? "" : "hidden"}`}>
        {coinsList.map((coin, index) =>
          index >= startIndex ? (
            <div
              className="item"
              key={index}
              onClick={() => {
                setDays(1);
                setAvailable(true);
                setSelectedCoin(coin);
                getMarketChart(coin.id, 1);
              }}
            >
              <img src={coin.image} alt="logo" />
              <p>{coin.name}</p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Dropdown;
