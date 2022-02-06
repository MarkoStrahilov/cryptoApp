import React from 'react';
import Home from '../layout/Home';
import Crypto from '../layout/Crypto';
import NFTS from '../layout/NFTS';
import News from '../layout/News'
import { Route, Routes} from 'react-router-dom'
import Details from '../layout/Details';

const Content = () => {
  return (
      <div className='app-content'>
              <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/cryptocurrencies' element={<Crypto/>}></Route>
              <Route path='/nfts' element={<NFTS/>}></Route>
              <Route path='/news' element={<News/>}></Route>
              <Route path='/currency/:id' element={<Details/>} />
              <Route path='/*' element={(
                <div>
                  <h1>Error 404</h1>
                </div>
              )} />
              </Routes>
      </div>
  )
};

export default Content;
