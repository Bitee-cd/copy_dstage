import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


const chart_data=[
    {x:2,y:3},{x:2.8,y:6.3},{x:5.42,y:3.43},{x:2,y:2.343},{x:5.62,y:8.433},{x:1.2,y:3},{x:2.9,y:3.23},{x:4.72,y:2.53},{x:8.52,y:3.46},{x:4.2,y:3.54},{x:7.34,y:3.76},{x:9.34,y:3.56},{x:4.62,y:5.4},
    {x:2.5,y:3.5},{x:8.2,y:1.43},{x:4.52,y:3},{x:2.24,y:4.433},{x:6.2,y:2.3},{x:2.2,y:7.3},{x:2.5,y:5.3},{x:5.22,y:1.33},{x:2.76,y:3.82},{x:2.54,y:6.53},{x:2,y:8.63},{x:3.62,y:5.3},{x:1.72,y:6.3},
    {y:2.5,x:3.5},{y:8.2,x:1.43},{y:4.52,x:3},{y:2.24,x:4.433},{y:6.2,x:2.3},{y:2.2,x:7.3},{y:2.5,x:5.3},{y:5.22,x:1.33},{y:2.76,x:3.82},{y:2.54,x:6.53},{y:2,x:8.63},{y:3.62,x:5.3},{y:1.72,x:6.3},
    {y:7.2,x:5.3},{x:2.2,y:5.3},{x:5.32,y:7.3},{x:8.2,y:4.3},{x:2.2,y:1.73},{x:3.2,y:2.3},{x:7.42,y:6.3},{x:3.42,y:3.53},{x:6.32,y:7.33},{x:0.22,y:9.2},{x:0.72,y:0.93},{x:9.2,y:6.73},{x:4.32,y:3.24},
]
   

const RarityDistribution = ()=>{

    const data = {
        datasets: [{
            label: 'A dataset',
            data: chart_data,
            backgroundColor: 'rgba(105, 42, 220, 1)',
            fill:true,
            borderWidth:12,
            pointRadius:7,
          },
        ],
      };

     const options = {
        plugins:{
            legend:{
              display: false
                },
              title: {
                display: true,
                text: 'Custom Chart Title',
                size:20,
                
            },
          },
        scales: {
          y: {
            beginAtZero: true,
            position:"right",
            max: 10,
            min: 0,
            ticks:{
            callback: v => `${v}K`,
            color: '#fff',
            fontSize: 12,
            stepSize: 1
            }, 
            grid: {
                drawBorder: true,
                borderColor:"rgba(56, 33, 98, 1)",
                drawOnChartArea:false,
                
                },
                title: {
                display: true,
                text: 'Rank',
                color: '#fff',
                font:{
                    size:20,
                    weight:700
                }
                },
                
          },
          x: {
           display:true,
            max: 9,
            min: 0,
            title: {
                display: true,
                text: 'Token ID',
                color: '#fff',
                size:16,
                padding:10,
                font:{
                    size:20,
                    weight:700
                }
              },
            ticks:{ 
                color: '#fff',
                fontSize: 12,
                stepSize:1,
                callback: v => `${v}K`,
            },
            grid: {
                drawBorder: true,
                borderColor:"rgba(56, 33, 98, 1)",
                drawOnChartArea:false,
                color: 'rgba(56, 33, 98, 1)',
              },
             
        }
        },
      };

    return(
        <div>
            <div className="mx-auto max-w-[1440px] w-[90%] my-10  border_box2 md:p-5 p-2 font-Header font-[700]">

            <div className='flex my-5 justify-between'>
                <p className='p-text '>Rarity distribution</p>
                
              </div>

                <div className='mx-auto w-[95%]'>
                <Scatter options={options} data={data} />
                </div>
            </div>
        </div>
    )
}
export default RarityDistribution