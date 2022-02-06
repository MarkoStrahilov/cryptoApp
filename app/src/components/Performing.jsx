import React from 'react';
import { useState, useEffect } from 'react';
import { useGetCoinsQuery } from '../services/cryptoApi';
import { useGetNftsQuery } from '../services/nftApi';
import Container from '../shared/Container';
import Card from '../shared/Card';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Performing = ({title,subjectData}) => {

  const {data: coinsList, isFetching} = useGetCoinsQuery(5);
  const {data: nftData} = useGetNftsQuery(5)
  const coinsData = coinsList?.data?.coins

  useEffect(()=>{
    setCoins(coinsData)
    setNftStatus(nftData?.assets)
  },[coinsData, nftData])

  const [coins, setCoins] = useState(coinsData)
  const [nftStatus, setNftStatus] = useState(nftData)

  const defaultImage = 'https://www.cnet.com/a/img/9AFTl2qto-rh5zRSeDm3TAmpVy8=/940x0/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png'
  console.log(nftStatus)

  if(isFetching) return 'Loading ...'

  if(subjectData === 'coins') {
    return (  
      <Container>
        <h2 className='subject-title'>{title}</h2>
        <div className="crypt-coin-holder">
             {coins && coins.length > 0 && coins.map((coin) => (
            <div className='coin-card-container' key={coin.id}>
               <Card info={coin} space={true}/>
             </div>
             ))}
        </div>
      </Container>
       );
  } else if (subjectData === 'nfts') {
    return (
      <Container>
        <h2 className='subject-title'>{title}</h2>
        <div className="crypt-coin-holder">
          {nftStatus && nftStatus.length > 0 && nftStatus.map((nft) => (
                 <div className='nft-card-holder'>
                    <div className="coin-head nft-head">
                      <p>{nft.name}</p>
                      <img src={nft?.image_thumbnail_url || defaultImage} alt="crypto coin" className='coin-image'/>
                    </div>
                    <div className="nft-body">
                      <p>collection: {nft?.collection?.name}</p>
                      <p>created: {moment(nft?.asset_contract?.created_date).startOf('ss').fromNow()}</p>
                    </div>
                    <div className="text-right desc-link">
                      <a href={nft?.permalink} className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Details</a>
                    </div>
                </div>
          ))}
        </div>
        <Link to={'/nfts'} className='btn btn-primary'>See more NFTS</Link>
      </Container>
    )
  }
};

export default Performing;
