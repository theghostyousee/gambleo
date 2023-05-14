import React from 'react'
import './main.css'
import Arbitrum from './arbitrum.svg'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './socials-discord.svg'
import Medium from './socials-medium.svg'



function main() {

    const openTwitter = () => {
        window.open("https://twitter.com/GambleoProtocol");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=I%27m%20ready%20to%20place%20bets%20with%20%40GambleoProtocol%21%20%0A%0ASign%20me%20up%20for%20early%20access%21%F0%9F%8E%B2&")
    }
  return (
    <div className='wrap'>

        <div className='title'>
            <h1>Get your PEPOS<br/>Today.</h1>
        </div>

        <div className='paragraph'>
            <p>Join the DeFi revolution with a fun, multi-chain Yield Processing Node<br/> and start harvesting your rewards!<br/></p>
        </div>

        <div className='buts'>
            <button onClick={tweet}>Early Access</button>
            
        </div>

        <div className='little-title'>
            <p>NETWORKS SUPPORTED</p>
            <div className='picture'>
                <img src={Arbitrum}></img>
            </div>
        </div>

        <ul className='socials'>
            <li onClick={openTwitter}>
                <img src={Twitter}></img>
            </li>
            <li>
                <img src={Telegram}></img>
            </li>
            <li>
                <img src={Medium}></img>
            </li>
            {/* <li>
                <img src={Discord}></img>
            </li> */}
        </ul>
    </div>
  )
}

export default main