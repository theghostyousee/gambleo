import React, { useState, useEffect } from "react";

import "./presale.css";
import "./main.css";

import contractABI from "./contractABI.json";
import Web3 from "web3";

import eth from "./media/eth.svg";
import token from "./2.png";
import arrow from "./media/arrow.svg";
import down from "./media/down.svg";
import { useNavigate } from 'react-router-dom';


function Presale() {
    const navigate = useNavigate();
    const handleGamesButtonClick = () => {
        navigate('/games');
      };
      

    const [userAddress, setUserAddress] = useState(null);
    const [buttonText, setButtonText] = useState('Connect Wallet');

    
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

  const gradientStyle = {
    background: "linear-gradient(to bottom right, #e174ff, #b157c9)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const [amount, setAmount] = useState("");
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState(0);
  const [stackValue, setStackValue] = useState("");

  const ETH_TO_STACK_RATIO = 10000;

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setConnected(true);
        console.log("Connected to MetaMask with account:", accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Please install MetaMask");
    }
  };

  const handleMaxClick = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const value = web3.utils.fromWei(balance, "ether");
    const formattedValue = parseFloat(value).toFixed(1);

    setBalance(formattedValue);
  };

  const handleUnlockWallet = async () => {
    const web3 = new Web3(window.ethereum);
    const contractAddress = "0x7EAff0eB2157fbf499bAdcB22941268c73fc77AF";
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const sender = (await web3.eth.getAccounts())[0];
    const value = web3.utils.toWei(amount, "ether");

    try {
      const result = await contract.methods.buyPresale().send({
        from: sender,
        value: value,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    setStackValue(value * ETH_TO_STACK_RATIO);
  };

  useEffect(() => {
    handleMaxClick();
  }, []);

  
 
  const [countdown, setCountdown] = useState("08:00:00"); // Set initial countdown value to 8 hours

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const endTime = new Date(now.getTime() + 8 * 60 * 60 * 1000); // Set end time 8 hours from the current time
      const remainingTime = endTime.getTime() - now.getTime(); // Calculate remaining time in milliseconds

      if (remainingTime <= 0) {
        setCountdown("00:00:00");
      } else {
        const hours = Math.floor(remainingTime / (1000 * 60 * 60)).toString().padStart(2, "0");
        const minutes = Math.floor((remainingTime / (1000 * 60)) % 60).toString().padStart(2, "0");
        const seconds = Math.floor((remainingTime / 1000) % 60).toString().padStart(2, "0");
        setCountdown(`${hours}:${minutes}:${seconds}`);
      }
    };

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  


  return (
    <div className="wrap">
      <header>
        <button onClick={handleGamesButtonClick}>GAMES</button>
        <button>LEADERBOARD</button>
        <div className="header-connect">
          <button onClick={() => window.ethereum && connectWallet()}>
            <p>{userAddress ? shortAddress(userAddress) : buttonText}</p>
          </button>
        </div>
      </header>

      <div className="title-presale">
        <h3>RISK PUBLIC PRESALE</h3>
         {/* <h5 style={gradientStyle}>Live in {countdown}</h5> */}
      </div>
      <div className="card-presale">
        <div className="card-presale-header">
          <div className="image-converter">
            <img src={eth}></img>
            <h2>ETH</h2>
            <img src={arrow}></img>
            <img src={token}></img>
            <h2 style={gradientStyle}>RISK</h2>
          </div>
          <div className="info-price">
            <h5>1 RISK = 0.1 USDC</h5>
          </div>
        </div>
        <div className="card-presale-content">
          <div className="timer">
            <p>Contribute in ETH</p>
            {/* <p>Time left:</p>
              <p>00:00:00</p> */}
          </div>

          <div className="input-buy">
            <input
              type={"number"}
              placeholder="0"
              value={amount}
              onChange={handleAmountChange}
            ></input>
            <p className="balance-user">Your contribution</p>

            <div className="eth-pointer">
              <img src={eth}></img>
              <h3>ETH</h3>
            </div>
          </div>
          <div className="arrow-down">
            <img src={down}></img>
          </div>
          <div className="input-buy">
            <input
              type={"number"}
              placeholder="0"
              value={stackValue}
              readOnly
            ></input>
            <p className="balance-user">Your allocation</p>

            <div className="eth-pointer">
              <img src={token}></img>
              <h3>RISK</h3>
            </div>
          </div>

          <div className="button-buy">
            {connected ? (
              <button onClick={handleUnlockWallet}>Contribute</button>
            ) : (
              <button onClick={connectMetaMask}>Unlock Wallet</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presale;
