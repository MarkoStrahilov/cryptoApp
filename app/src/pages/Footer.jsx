import React from 'react';

const Footer = () => {


  const currentYear = new Date().getFullYear()

  return (

    <div className='footer p-10 bg-gray-700 text-primary-content footer-center'>
    <div>
        <p className='text-lg'>Copyright &copy; {currentYear} all rights reserved</p>
    </div>
 </div>
  )
};

export default Footer;
