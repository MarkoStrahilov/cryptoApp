import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
        <div className='app-sidebar'>
            <div className="sider-items-container">
              <Link to='/' className='sidemar-navigation'>Home</Link>
              <Link to='/cryptocurrencies' className='sidemar-navigation'>Crypto Currencies</Link>
              <Link to='/nfts' className='sidemar-navigation'>NFTS</Link>
              <Link to='/news' className='sidemar-navigation'>News</Link>
              <div className="create-binance-account">
               <h2>Havent started with Cryptocurrency ?</h2>
               <p>create an account on the most popular exchange platform in the world</p>
                <a className='btn btn-primary' href="https://accounts.binance.com/en/register?ref=70028626">create account</a>
              </div>
            </div>
        </div>
  )
};

export default Sidebar;
