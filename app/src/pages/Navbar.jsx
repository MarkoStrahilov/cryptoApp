import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {FaBars} from 'react-icons/fa'
import Collapse from '../components/Collapse';
import logo from '../images/logo.png'

const Navbar = () => {

  const [nav,setNav] = useState(false)

  useEffect(() => {

  }, [nav])

  return (
  <div className='navbar navbar-container'>
    <div className="navbar-content">
      <img src={logo} alt="logo" width='150px' height='150px'/>
     <FaBars style={{color: '#fff',fontSize: "35px",cursor: 'pointer'}} onClick={() => setNav(!nav)}/>
      <Collapse collapseItem={nav}/>
     </div>
  </div>
  );
};

export default Navbar;
