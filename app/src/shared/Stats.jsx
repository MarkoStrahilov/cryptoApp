  import React from 'react';
  import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined,  TrophyOutlined } from '@ant-design/icons';

const Stats = (props) => {


  return (
   <>
   <div className='asset-details-container p-4 m-5'>
    <h1>{props.title}</h1>
    </div>
     <div className="w-full stats">
    <div className="stat place-items-center place-content-center">
      <div className="stat-title">{props.space ? (
        <DollarCircleOutlined />
      ) : ( <MoneyCollectOutlined />)} <p>{props.assetStat1Title}</p></div> 
      <div className="stat-value">{props.space ? '$' : ''} {new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(props.assetStat1Value)}</div> 
     {props.space ? (
          <div className={`stat-desc ${props.change < 0 ? 'text-red-700 font-bold mt-2' : 'text-green-700 font-bold mt-2'}`}>{props.change < 0 ? `↘︎ ${props.change}` : `↗︎ ${props.change}`} %</div>
     ) : null}
    </div> 
    <div className="stat place-items-center place-content-center">
      <div className="stat-title">{props.space ? (
        <TrophyOutlined />
      ) : (<FundOutlined />)}<p>{props.assetStat2Title}</p></div> 
      <div className="stat-value">{props.space ? '$' : ''} {new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(props.assetStat2Value)}</div> 
    </div> 
    <div className="stat place-items-center place-content-center">
      <div className="stat-title">{props.space ? (
        <DollarCircleOutlined />
      ) : (<ExclamationCircleOutlined />)}<p>{props.assetStat3Title}</p></div> 
      <div className="stat-value">{ new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(props.assetStat3Value)}</div> 
    </div>
  </div>  
   </>
  );
};

export default Stats;
