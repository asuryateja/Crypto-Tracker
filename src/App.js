import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import React , {useState, useEffect} from 'react'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
import Coin from './routes/Coin'

function App() {
  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false' 

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setCoins(res.data)
      
    }).catch(e => {
      console.log(e)
    })
  },[])

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Coins coins={coins} />} />
      <Route path='/coin' element={<Coin />}>
        <Route path=':coinId' element={<Coin />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
