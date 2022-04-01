import React from 'react'
import Coinitem from './Coinitem.js'
import { Link } from 'react-router-dom'
import './Coins.css'

const coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market Cap</p>
            </div>
            {props.coins.map(coin => {
                return (
                    <Link to={`/coin/${coin.id}`} key={coin.id}>
                    <Coinitem key={coin.id} coin={coin} />
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default coins