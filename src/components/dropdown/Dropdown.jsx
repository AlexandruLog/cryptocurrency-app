import React, { useState } from "react";
import "./Dropdown.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function Dropdown(props) {
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
        {props.coinsList.map((coin, index) => (
          <div
            className="item"
            key={index}
            onClick={() => {
              props.setAvailable(true);
              props.setSelectedCoin(coin);
              props.getMarketChart(coin.id, 1);
            }}
          >
            <img src={coin.image} alt="logo" />
            <p>{coin.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
