import { useParams } from 'react-router-dom';
import React from 'react';
import LineChart from '../components/LineChart';
import { useEffect,useState } from 'react';
import Stats from '../shared/Stats';
import axios from 'axios';
import Container from '../shared/Container';

const Details = ({type}) => {

  const {id} = useParams()
  const [crypto, setCrypto] = useState([])
  const [showLinks, setShowLinks] = useState(false)


  useEffect(() => {

    const optionsId = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '9260077293msh32c654a0d27e390p1a812cjsn8fb1995a5d19'
      }
    };

    axios.request(optionsId).then(function (response) {
      setCrypto(response.data)
    }).catch(function (error) {
      console.error(error);
    });

  }, [])

  const assetLinks = () => {

    if(showLinks === false) {

      setShowLinks(true)

    } else {

      setShowLinks(false)

    }
  }

  const details = crypto?.data?.coin;
  return (
    <div>
        <div className="asset-details-container" style={{textAlign: 'center'}}>
          <h1>Cryptocurrency {details?.name} ( <span>{details?.symbol}</span> ) Details</h1>
          <p>View asset statistcs, market cap, value and much more indepth details</p>
        </div>  

       <div className="chart-container">
       <LineChart assetName={details?.name}/>
       </div>
        <div className="asset-details">
            <Stats title='Overview' assetStat1Title='Current Price' assetStat1Value={details?.price} assetStat2Title='All Time High' assetStat2Value={details?.allTimeHigh?.price} assetStat3Title='Market Cap' assetStat3Value={details?.marketCap} change={details?.change} space={true} />
            <Stats title='Stats' assetStat1Title='Number of Exchanges' assetStat1Value={details?.numberOfExchanges} assetStat2Title='Number of Markets' assetStat2Value={details?.numberOfMarkets} assetStat3Title='Total Supply' assetStat3Value={!details?.supply?.total ? details?.supply?.circulating : details?.supply?.total } />
        </div>
        <Container className="asset-iternal-links">
          <div className='asset-details-container'>
          <h1>What is {details?.name} ?</h1>
          <div dangerouslySetInnerHTML={{ __html: details?.description }} />
          </div>
          <button onClick={() => assetLinks()} className='btn btn-primary'>Show {details?.name} Links</button>
         {showLinks && (
            <div className='asset-details-container asset-links'>
            {details?.links.map((link) => (
              <div className='asset-link'>
                <p>{link.name}</p>
                <a href={link.url} style={{color: '#0071bd'}}>{link.url}</a>
              </div>
            ))}
          </div>
         )}
        </Container>
    </div>
  );
};

export default Details; 
