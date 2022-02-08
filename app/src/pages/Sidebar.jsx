import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome, FaBuffer, FaRegNewspaper, FaBtc} from 'react-icons/fa';


const Sidebar = () => {

  const styles = {
    color: '#fff',
    fontSize: "30px",
    margin: '0 1rem'
  }

  return (
        <div className='app-sidebar'>
            <div className="sider-items-container">
              <Link to='/' className='sidemar-navigation'>
                <FaHome style={styles}/>
                <p>Home</p>
              </Link>
              <Link to='/cryptocurrencies' className='sidemar-navigation'>
                <FaBtc style={styles}/>
                <p>Crypto Currencies</p>
              </Link>
              <Link to='/nfts' className='sidemar-navigation'>
                <FaBuffer style={styles}/>
                <p>NFTS</p>
              </Link>
              <Link to='/news' className='sidemar-navigation'>
                <FaRegNewspaper style={styles}/>
                <p>News</p>
                </Link>
              <div className="create-binance-account">
               <h2>Don't own any cryptocurrency ?</h2>
               <p>Get started right now for FREE</p>
                <a className='btn btn-sm' href="https://accounts.binance.com/en/register?ref=70028626">create account</a>
              </div>
            </div>
        </div>
  )
};

export default Sidebar;
