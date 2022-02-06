import React from 'react';

const Statistics = ({title, stats}) => {
  return (
    <div className='head-statistics'>
        <h3>Total {title}</h3>
        <p>{stats}</p>
    </div>
  )
};

export default Statistics;
