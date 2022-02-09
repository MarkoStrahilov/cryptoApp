import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome, FaBuffer, FaRegNewspaper, FaBtc} from 'react-icons/fa';



const Collapse = ({collapseItem}) => {

    const navbarCollapse = {
        position: "absolute",
        top: '10%',
        right: '0%',
        border:' 1px solid black',
        display: collapseItem === true ? 'initial' : 'none'
    }

    const styles = {
        color: '#fff',
        fontSize: "30px",
        margin: '0 1rem'
      }

  return (
    <div style={navbarCollapse}>
        <div className='nav-content-collapse'>
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
        </div>
    </div>
  )
};

export default Collapse;
