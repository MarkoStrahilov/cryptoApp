import React from 'react';
import Statistics from '../components/Statistics';
import { useGetCoinsQuery } from '../services/cryptoApi';
import Performing from '../components/Performing';
import Title from '../shared/Title';
import PacmanLoader from "react-spinners/PacmanLoader";

const Home = () => {
  const {data ,isFetching} = useGetCoinsQuery(100) 
  const statsData = data?.data?.stats

  if(isFetching) return (
    <div className="loader-container">
      <PacmanLoader  size={50} color='#0071bd'/>  
    </div>
  )

  return (
  <div className='home-container'>
      <Title text='CryptoCurrency Statistics' />
      <div className="statistics-row">
        <Statistics title='Crypto Currencies' stats={new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(statsData?.totalCoins)} icon='crypto'/>
        <Statistics title='Market Cap' stats={new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(statsData?.totalMarketCap)} icon='marketCap'/>
        <Statistics title='Markets' stats={new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(statsData?.totalMarkets)} icon='totalMarkets'/>
        <Statistics title='Exchanges' stats={new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(statsData?.totalExchanges)} icon='exchanges'/>
        <Statistics title='24h Volume' stats={new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(statsData?.total24hVolume)} icon='volume'/>
      </div>   
      <Performing title='Top 5 Outperforming Cryptocurrencies' subjectData='coins'/>
      <Performing title='Distinctive NFTS' subjectData='nfts'/>
  </div>
  );
};

export default Home;
