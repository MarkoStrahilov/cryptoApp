import React from 'react';
import { useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const LineChart = ({assetHistory, assetPrice,assetName}) => {

    useEffect(() => {

    }, [assetHistory?.data?.history])

    const coinPrice = []
    const coinHistory = []

    for(let i = 0; i < assetHistory?.data?.history.length; i++) {
         coinPrice.push(assetHistory.data?.history[i].price)
    }
  for(let i = 0; i < assetHistory?.data?.history.length; i++) {
        coinHistory.push(new Date(assetHistory?.data?.history[i].timestamp).toDateString())
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
        <h1>Line Chart</h1>
        <h1>{assetName} {assetPrice}</h1>
        <Line data={data} option={options} width={50} height={15}/>
    </div>
  )
};

export default LineChart;
