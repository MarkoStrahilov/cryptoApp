import React from 'react';
import Container from './Container';
import millify from 'millify'
import {Link} from 'react-router-dom'

const Card = ({info, space}) => {
  if(space) {
    return (
      <Container className='crypto-card'>
         <div className="coin-head">
             <p>{info.name}</p>
             <img src={info.iconUrl} alt="crypto coin" className='coin-image'/>
         </div>
         <div className="coin-body">
             <p>coin rank #{info.rank}</p>
             <p>coin price {millify(info.price)} $</p>
            <div className="text-right desc-link">
            <Link to={`/currency/${info.uuid}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{backgroundColor: info.color}}>Details</Link>
            </div>
         </div>
      </Container>
        )
  } else {
    return (
      <div className='crypto-coins-card'>
       <div className="coins-head">
           <p>{info.name}</p>
           <img src={info.iconUrl} alt="crypto coin" width={'50px'} height={'50px'}/>
       </div>
       <div className='crypto-coins-body'>
          <div className="flex">
          <div className='coin-details'>
               <p>price</p>
               <p> {millify(info.price)}</p>
          </div>
              <div className='coin-details'>
                <p>change</p>
                <p className={info.change < 0 ? 'red' : 'green'}>{info.change}</p>
              </div>
              <div className='coin-details'>
               <p>symbol</p>
               <p> {info.symbol}</p>
              </div>
          </div>
          <Link to={`/currency/${info.uuid}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{backgroundColor: info.color}}>Details</Link>
       </div>
       </div>
      )
  }

};

export default Card;
