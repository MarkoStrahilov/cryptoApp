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

  const defaultImage = 'https://www.trustetc.com/wp-content/uploads/2018/09/cryptocurrency-accepted.jpg'

  return (
    <div className='crypto-news-container'>
         <Title text={'Daily Cryptocurrency News'}/> 
        <div className="news-holder">
        {news && news.length > 0 && news.map((doc) => (
            <a href={doc?.url} className="news-container card card-bordered">
              <div className="news-heading">
              <p className='card-title'>{doc.name}</p>
              <img src={doc?.image?.thumbnail?.contentUrl || defaultImage} alt="news" style={{maxWidth: '200px', maxHeight: '100px'}}/>
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
