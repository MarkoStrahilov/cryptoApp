import React from 'react';
import { useGetNftsQuery } from '../services/nftApi';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';

const NFTS = () => {


  const {data, isFetching} = useGetNftsQuery(50)

  useEffect(() => {

    setNft(data?.assets)

  }, [data])

  const [nft, setNft] = useState(data)
  console.log(nft)

  const defaultDesc = 'NFTs are collectable digital assets that hold value, just like how physical art holds value'
  const defaultImage = 'https://www.cnet.com/a/img/9AFTl2qto-rh5zRSeDm3TAmpVy8=/940x0/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png'

  if (isFetching) return 'Loading ...'

  return (
    <div className='nfts-holder'>
        <h1>nfts</h1>
       <div className='nfts-container'>
        {nft && nft.length > 0 && nft.map((asset) => (
           <div key={asset.id} className={"card lg:card-side card-bordered nft-container"}>
             <div className="nft-credentials">
               <img src={asset?.image_thumbnail_url || defaultImage} alt="nft" className='nft-image'/>
                <div className='nft-info'>
                  <h2><b>Name</b> {asset?.name}</h2>
                </div>
             </div>
             <div className='nft-details'>
               <div className='nft-description'>
                 <p className='font-semibold text-lg'>Description</p>
                 <p>{asset.description || defaultDesc}</p>
               </div>
               <p className='font-semibold text-lg mt-3 mb-3'>Overview</p>
               <div className="nft-body-container">
               <div className='nft-overview'>
                 <div className="stat-container">
                <div className="asset-">Collection</div> 
                <div className=''>{asset?.collection?.name}</div>
                </div>
                <div className="stat-container">
                <div className="asset-">Creator</div> 
                <div className=''>{!asset?.creator?.user.username ? 'not available' : asset?.creator?.user.username}</div>
                </div>
               </div>
               <div className='nft-overview'>
                 <div className="stat-container">
                <div className="asset-">NFT ID</div> 
                <div className=''>{asset?.id}</div>
                </div>
                <div className="stat-container">
                <div className="asset-">Upload Date</div> 
                <div className=''>{moment(asset?.collection?.created_date).format('llll')}</div>
                </div>
               </div>
               </div>
               <div className="text-right desc-link">
                      <a href={asset?.permalink} className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">Make Offer</a>
                </div>
             </div>
           </div>
        ))}
       </div>
  </div>
  );
};

export default NFTS;
