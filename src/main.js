import React from 'react'
import './main.css'
import Arbitrum from './binance.png'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './socials-discord.svg'
import Medium from './socials-medium.svg'



function main() {

    const openTwitter = () => {
        window.open("https://twitter.com/NPC_bsc");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=This%20is%20my%20proof%20of%20NPC%20for%20%40NPC_bsc%20%F0%9F%A4%96%0D%0A%0D%0ALaunching%20soon%20on%20%23BSC&")
    }
    const telegram = () => {
        window.open("https://t.me/NPC_bsc")
    }

  return (
    <div className='wrap'>

        <div className='title'>
            <h1>$NPC COMING<br/>on BSC.</h1>
        </div>

        <div className='paragraph'>
            <p>The NPC meme is the most popular in the world. It deserves to be alongside PEPE<br/> even Elon Musk said so<br/></p>
        </div>

        <div className='buts'>
            <button onClick={tweet}>Proof of NPC</button>
            
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
                <img src={Telegram} onClick={openTwitter}></img>
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