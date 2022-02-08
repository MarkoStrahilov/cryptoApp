import React from 'react';

const Statistics = ({title, stats}) => {
  return (
    <div className="asset-stat">
      <div className="stat-title">{title}</div> 
      <div className="stat-value">{stats}</div> 
    </div>
  )
};

export default Statistics;
