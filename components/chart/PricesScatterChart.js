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

export const options = {
    plugins:{
        legend:{
          display: false
            },
          title: {
            display: true,
            text: 'Custom Chart Title'
            
        },
      },
    scales: {
      y: {
        beginAtZero: true,
        position:"right",
        max: 800,
        min: 0,
        ticks:{
            color: '#fff',
            fontSize: 12,
            stepSize: 200
            }, 
            grid: {
                drawBorder: true,
                borderColor:"rgba(56, 33, 98, 1)",
                drawOnChartArea:false,
               
              },
            
      },
      x: {
        type: 'category',
        
        ticks:{ 
            color: '#fff',
            fontSize: 12,
        },
        grid: {
            drawBorder: true,
            borderColor:"rgba(56, 33, 98, 1)",
            drawOnChartArea:false,
            color: 'rgba(56, 33, 98, 1)',
          },
        labels: [
            '24/08',
            '25/08',
            '26/08',
            '27/08',
            '28/08',
            '29/08',
            '30/08',
            '01/09',
            '02/09',
            '03/09',
            '04/09',
         
          ],
    }
    },
  };

   const data = {
    datasets: [{
        label: 'A dataset',
        data: [100, 150, 100, 150,200,130,120,220,170,150,147,177,130 ],
        backgroundColor: 'rgba(105, 42, 220, 1)',
        fill:true,
        pointRadius:7,
      },
    ],
  };

const PricesScatterChart = ()=>{

    return(
        <div>
            <div className="mx-auto max-w-[1440px] w-[90%] my-10  border_box2 md:p-5 p-2 font-Header font-[600]">

            <div className='flex my-5 justify-between'>
                <p className='p-text font-bold'>Prices</p>
                <div className="bg-area grid grid-cols-3 gap-3 rounded-[12px] p-1 font-Body m p-small-text md:w-1/2 lg:w-[30%]">
                    <p className="py-2 text-center rounded-[8px] bg-[#190935] text-sub2">7 days</p>
                    <p className="py-2 text-center rounded-[8px] ">30 days</p>
                    <p className="py-2 text-center rounded-[8px] ">90 days</p>
                  </div>
              </div>

                <div className='mx-auto w-[95%]'>
                <Scatter options={options} data={data} />
                </div>
            </div>
        </div>
    )
}
export default PricesScatterChart