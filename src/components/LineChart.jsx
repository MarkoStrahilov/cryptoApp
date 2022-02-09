import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const LineChart = ({assetName}) => {

  const {id} = useParams()
  const [history, setHistory] = useState([])

  useEffect(() => {

      const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${id}/history`,
        params: { timePeriod: '7d'},
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '9260077293msh32c654a0d27e390p1a812cjsn8fb1995a5d19'
        }
      };
      
      axios.request(options).then(function (response) {
        setHistory(response.data);
      }).catch(function (error) {
        console.error(error);
      });

  }, [setHistory])


  const coinPrice = []
  const coinHistory = []


  for(let i = 0; i < history?.data?.history.length; i++) {
       coinPrice.push(history.data?.history[i].price)
  }
  for(let i = 0; i < history?.data?.history.length; i++) {
      coinHistory.push(history?.data?.history[i].timestamp)
  }

  const data = {
    labels: coinHistory,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min:0,
            max: 19,
          },
        },
      ],
    },
  };

  return (
    <div>
        <div className="asset-details-container p-3">
        <h1>{assetName} Price in USD for the past week</h1>
        </div>
        <div className='line-chart'>
        <Line data={data} option={options} width={50} height={15}/>
        </div>
    </div>
  )
};

export default LineChart;

