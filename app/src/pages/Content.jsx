import React from 'react';
import Home from '../layout/Home';
import Crypto from '../layout/Crypto';
import Exchanges from '../layout/Exchanges';
import News from '../layout/News'
import { Route, Routes} from 'react-router-dom'

const Content = () => {
  return (
      <div className='app-content'>
              <Routes>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/cryptocurrencies' element={<Crypto/>}></Route>
              <Route path='/exchanges' element={<Exchanges/>}></Route>
              <Route path='/news' element={<News/>}></Route>
              </Routes>
      </div>
  )
};

export default Content;
