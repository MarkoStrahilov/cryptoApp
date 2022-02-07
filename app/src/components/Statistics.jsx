import React from 'react';

const Statistics = ({title, stats}) => {
  return (
    <div class="asset-stat">
      <div class="stat-title">{title}</div> 
      <div class="stat-value">{stats}</div> 
    </div>
  )
};

export default Statistics;
