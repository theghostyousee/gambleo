import React from 'react'
import './main.css'
import Arbitrum from './arbitrum.svg'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './socials-discord.svg'
import Medium from './socials-medium.svg'



function main() {

    const openTwitter = () => {
        window.open("https://twitter.com/PeposMoney");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=I%27m%20getting%20ready%20to%20collect%20my%20%24PEPOS%20rewards%20and%20gain%20access%20to%20a%20lifetime%20of%20passive%20income%20%0D%0A%0D%0A%40PeposMoney%20%20%F0%9F%90%B8%20EARLY%3A%20peposmoney.xyz%20&")
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