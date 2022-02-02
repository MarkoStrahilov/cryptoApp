import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
        <div className='app-sidebar'>
            <div className="sider-items-container">
              <Link to='/home' className='sidemar-navigation'>Home</Link>
              <Link to='/cryptocurrencies' className='sidemar-navigation'>Crypto Currencies</Link>
              <Link to='/exchanges' className='sidemar-navigation'>Exchanges</Link>
              <Link to='/news' className='sidemar-navigation'>News</Link>
            </div>
        </div>
  )
};

export default Sidebar;
