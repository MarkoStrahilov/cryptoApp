import React from 'react';

const Footer = () => {


  const currentYear = new Date().getFullYear()

  return (

    <div className='footer p-10 text-primary-content footer-center footer-container'style={{backgroundColor: 'rgb(0, 21, 41)'}}>
    <div>
        <p className='text-lg'>Copyright &copy; {currentYear} all rights reserved</p>
    </div>
 </div>
  )
};

export default Footer;
