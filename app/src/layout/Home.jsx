import React from 'react';
import Statistics from '../components/Statistics';
import { useGetCoinsQuery } from '../services/cryptoApi';
import Performing from '../components/Performing';
import Title from '../shared/Title';


const Home = () => {
  const {data} = useGetCoinsQuery(100) 
  const statsData = data?.data?.stats

  return (
  <div>
      <Title text='CryptoCurrency Statistics' />
      <div className="statistics-row">
        <Statistics title='Crypto Currencies' stats={statsData?.totalCoins}/>
        <Statistics title='Market Cap' stats={statsData?.totalMarketCap}/>
        <Statistics title='Markets' stats={statsData?.totalMarkets}/>
        <Statistics title='Exchanges' stats={statsData?.totalExchanges}/>
        <Statistics title='24h Volume' stats={statsData?.total24hVolume}/>
      </div>   
      <Performing title='Top 5 Outperforming Cryptocurrencies' subjectData='coins'/>
      <Performing title='Top 5 Outperforming NFTS' subjectData='nfts'/>
  </div>
  );
};

export default Home;
