import React from 'react';
import { useState, useEffect } from 'react';
import { useGetCoinsQuery } from '../services/cryptoApi';
import Card from '../shared/Card';
import { Input } from 'antd';

const Crypto = () => {

  const {data: cryptoCurrencies, isFetching} = useGetCoinsQuery(100);
  const [search, setSearch] = useState('')

  useEffect(()=>{
    const filter = cryptoCurrencies?.data?.coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    setCrypto(filter)

  },[cryptoCurrencies?.data?.coins, search])

  const cryptoCoins = cryptoCurrencies?.data?.coins
  const [crypto, setCrypto] = useState(cryptoCoins)

  if(isFetching) return 'Loading ...'

  return (
    <div className='crypto-cards-container'>
        <h1>Crypto Currencies</h1>
        <div className="search-crypto">
          <Input type="text" className='input input-bordered' placeholder="Search Crypto Currencies" onChange={(e) => setSearch(e.target.value)}/>
        </div>

        <div className="crypto-currencies-container">
        {crypto && crypto.length > 0 && crypto.map((coin) => (
           <div className='coins-card-container' key={coin.id}>
              <Card key={coin.id} info={coin} space={false}/>
            </div>
            ))}
        </div>
    </div>
  )
};

export default Crypto;
