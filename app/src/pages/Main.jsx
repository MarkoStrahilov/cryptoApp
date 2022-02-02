import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';


const Main = () => {
  return (
    <div className='main-container'>
        <Sidebar/>
        <Content>
        </Content>
    </div>
  )
};

export default Main;
