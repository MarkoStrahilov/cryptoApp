import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {FaBars} from 'react-icons/fa'
import logo from '../images/logo.png'
import {FaHome, FaBuffer, FaRegNewspaper, FaBtc} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [nav,setNav] = useState(false)

  useEffect(() => {

  }, [nav])

  const navbarCollapse = {
    position: "absolute",
    top: '10%',
    right: '0%',
    width: '100%',
    border:' 1px solid black',
    display: nav === true ? 'initial' : 'none'
}

const styles = {
    color: '#fff',
    fontSize: "30px",
    margin: '0 1rem'
  }

  return (
<>
<div className='navbar navbar-container'>
    <div className="navbar-content">
      <img src={logo} alt="logo" width='150px' height='150px'/>
     <FaBars style={{color: '#fff',fontSize: "35px",cursor: 'pointer'}} onClick={() => setNav(!nav)}/>
     </div>
  </div>
  <div style={navbarCollapse}>
        <div className='nav-content-collapse'>
            <Link to='/' className='sidemar-navigation' onClick={() => setNav(false)}>
                <FaHome style={styles}/>
                <p>Home</p>
            </Link>
            <Link to='/cryptocurrencies' className='sidemar-navigation' onClick={() => setNav(false)}>
                <FaBtc style={styles}/>
                <p>Crypto Currencies</p>
            </Link>
            <Link to='/nfts' className='sidemar-navigation' onClick={() => setNav(false)}>
                <FaBuffer style={styles}/>
                <p>NFTS</p>
              </Link>
              <Link to='/news' className='sidemar-navigation' onClick={() => setNav(false)}>
                <FaRegNewspaper style={styles}/>
                <p>News</p>
            </Link>
        </div>
    </div>
</>
  );
};

export default Navbar;
