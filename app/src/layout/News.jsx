import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useGetNewsQuery } from '../services/newsApi';
import Title from '../shared/Title';
import moment from 'moment'
import {Link} from 'react-router-dom';

const News = () => {

  const {data} = useGetNewsQuery(300)

  useEffect(() => {
    
    setNews(data?.value)

  }, [data?.value])

  const [news,setNews] = useState(data?.value)
  console.log(news)

  const genRandImage = () => {
    const defaultImages = ['https://www.trustetc.com/wp-content/uploads/2018/09/cryptocurrency-accepted.jpg',
    "https://blockonomi-9fcd.kxcdn.com/wp-content/uploads/2017/12/cryptocurrency-news.jpg",
    "https://bitcoinexchangeguide.com/wp-content/uploads/2018/08/Bitcoin-Blockchain-and-Cryptocurrency-News-For-August-24-VIDEO-Recap.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqI-agWm9DzF2Cj9dMrQKvP7q4IuTY05X89Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWAEbMfSsZLhniMqtMxREOlBbW9VVxubrQg&usqp=CAU"
  ]
   
   const num =  Math.floor(Math.random() * 5);
   return defaultImages[num]
  
  }
  
    const images = genRandImage()


  return (
    <div className='crypto-news-container'>
         <Title text={'Daily Cryptocurrency News'}/> 
        <div className="news-holder">
        {news && news.length > 0 && news.map((doc) => (
            <a href={doc?.url} className="news-container card card-bordered">
              <div className="news-heading">
              <p className='card-title'>{doc.name}</p>
              <img src={doc?.image?.thumbnail?.contentUrl || images} alt="news" style={{maxWidth: '200px', maxHeight: '100px'}}/>
            </div>
            <div className="card-body-content">
            <p className='card-body-text'>{doc.description}</p>
            <div className="provider-avatar mt-5">
              <p>{doc?.provider[0]?.name}</p>
              <p className='time-publieshed'>- {moment(doc?.datePublished).startOf('ss').fromNow()}</p>
            </div>
           </div>
         </a>
        ))}
        </div>
    </div>
  )
};

export default News;
