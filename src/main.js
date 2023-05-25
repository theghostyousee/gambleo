import React from 'react'
import './main.css'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './socials-discord.svg'
import Medium from './socials-medium.svg'
import Logo from './logo.png'



function main() {
    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=Risk%20it%20all%20for%20%40RiskProtocol%20%F0%9F%8E%B2%0D%0A& ")
    }

  return (
    <div className='wrap'>

        <div className='title'>
            <img src={Logo}></img>
        </div>

        <div className='buts'>
            <button onClick={tweet}>REGISTER</button>
            
        </div>

       
        <ul className='socials'>

        </ul>
    </div>
  )
}

export default main