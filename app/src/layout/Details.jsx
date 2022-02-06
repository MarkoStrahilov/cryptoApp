import { useParams } from 'react-router-dom';
import React from 'react';
import HTMLReactParser from 'html-react-parser'
import { useContext,useEffect,useState } from 'react';
import CryptoContext from '../context/CryptoContext';
import axios from 'axios';

const Details = ({type}) => {

  const {id} = useParams()
  const [crypto, setCrypto] = useState([])

  useEffect(() => {

    const options = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '9260077293msh32c654a0d27e390p1a812cjsn8fb1995a5d19'
      }
    };

    axios.request(options).then(function (response) {
      setCrypto(response.data)
    }).catch(function (error) {
      console.error(error);
    });

  }, [])

  const details = crypto?.data?.coin;
  console.log(details)

  return (
    <div>
        <h1>Cryptocurrency {details?.name} ( <span>{details?.symbol}</span> )</h1>
    </div>
  );
};

export default Details;
