import React, { useState, useEffect } from "react";
import "./main.css";
import Twitter from "./socials-twitter.svg";
import Telegram from "./socials-telegram.svg";
import Discord from "./socials-discord.svg";
import Medium from "./socials-medium.svg";
import Logo from "./logo.png";
import Web3 from "web3";

function Main() {
  const [userAddress, setUserAddress] = useState(null);
  const [buttonText, setButtonText] = useState("Connect Wallet");

  async function connectWallet() {
    try {
      const web3 = new Web3(window.ethereum);

      // Get the user's accounts
      const accounts = await web3.eth.requestAccounts();

      // Check if the user is on the Arbitrum chain
      const chainId = await web3.eth.getChainId();
      if (chainId !== 1) {
        setButtonText("Wrong Network");
        return;
      }

      // Update state with the user's address
      setUserAddress(accounts[0]);
      setButtonText(shortAddress(accounts[0]));
    } catch (error) {
      console.error(error);
    }
  }

  const shortAddress = (address) => {
    return address ? address.slice(0, 6) + "..." + address.slice(-5) : "";
  };

  const [isHeadsClicked, setIsHeadsClicked] = useState(false);

  const handleClick = (isHeads) => {
    setIsHeadsClicked(isHeads);
  };

  return (
    <div className="wrap">
      <header>
        <button>GAMES</button>
        <button>LEADERBOARD</button>
        <div className="header-connect">
          <button onClick={() => window.ethereum && connectWallet()}>
            <p>{userAddress ? shortAddress(userAddress) : buttonText}</p>
          </button>
        </div>
      </header>

      <main>
        <div className="title">
          <h1>#1 MOST TRUSTED PLACE TO GAMBLE</h1>
        </div>
        <div className="coin">
          <img src={Logo}></img>
        </div>
        <div className="heads">
          <button
            style={{
              background: isHeadsClicked
                ? "linear-gradient(152.2deg,#e174ffba, rgba(176, 87, 201, 0.701))"
                : "linear-gradient(152.2deg,#e174ff, #b157c9)",
            }}
            onClick={() => handleClick(true)}
          >
            HEADS
          </button>
          <button
            style={{
              background: isHeadsClicked
                ? "linear-gradient(152.2deg,#e174ff, #b157c9)"
                : "linear-gradient(152.2deg,#e174ffba, rgba(176, 87, 201, 0.701))",
            }}
            onClick={() => handleClick(false)}
          >
            TAILS
          </button>
        </div>

        <div className="input">
          <input type="number"></input>
          <div className="button-inp">
            <button>1/2</button>
            <button>X2</button>
            <button>X5</button>
            <button>MAX</button>
          </div>
        </div>
        <div className="flip">
          <button>FLIP</button>
        </div>
      </main>
    </div>
  );
}

export default Main;
