  import React from 'react';
  import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

const Stats = (props) => {
  return (
   <>
    <h1 className='text-start'>{props.title}</h1>
     <div className="w-full shadow stats">
    <div className="stat place-items-center place-content-center">
      <div className="stat-title">{props.space ? (
        <DollarCircleOutlined />
      ) : ( <MoneyCollectOutlined />)} <p>{props.assetStat1Title}</p></div> 
      <div className="stat-value">{parseFloat(props.assetStat1Value)}</div> 
     {props.space ? (
          <div className={`stat-desc ${props.change < 0 ? 'text-error' : 'text-success'}`}>{props.change < 0 ? `↘︎ ${props.change}` : `↗︎ ${props.change}`} %</div>
     ) : null}
    </div> 
    <div className="stat place-items-center place-content-center">
      <div className="stat-title">{props.space ? (
        <TrophyOutlined />
      ) : (<FundOutlined />)}<p>{props.assetStat2Title}</p></div> 
      <div className="stat-value">{parseFloat(props.assetStat2Value)}</div> 
    </div> 
    <div className="stat place-items-center place-content-center">
      <div className="stat-title">{props.space ? (
        <DollarCircleOutlined />
      ) : (<ExclamationCircleOutlined />)}<p>{props.assetStat3Title}</p></div> 
      <div className="stat-value">{props.assetStat3Value}</div> 
    </div>
  </div>  
   </>
  );
};

export default Stats;
