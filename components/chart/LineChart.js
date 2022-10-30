import React, { useEffect, useRef, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as Chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
} from "chart.js"

Chartjs.register(
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale,
    Filler,

    )

function LineChart() {
  const [color,setColor]=useState(null)
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      // console.log('CanvasRenderingContext2D', chart.ctx);
      // console.log('HTMLCanvasElement', chart.canvas);

      var ctx = chart.ctx;
       const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(105, 42, 220, 0.1)');   
          gradient.addColorStop(0.5, 'rgba(19, 37, 248, 0.01)');
          gradient.addColorStop(0.7, 'rgba(11, 36, 251, 0)');
          gradient.addColorStop(1, '#170B2D');
          setColor(gradient)
    }
    
  }, []);

    const data={
        labels:["n","e","r","e","w"],
        datasets:[{
            data:[7,3.2,6.8,5.8,9.0],
            borderColor:"rgba(128, 255, 219, 1)",
            backgroundColor:color,
            pointBorderColor:"transparent",
            tension:0.2,
            fill:true,
          

        }]
    }

    const options={
      
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
            x: {
              display: false,
              
              title: {
                display: true,
                text: 'Month'
              }
            },
            y: {
              display: false,
              title: {
                display: true,
                text: 'Value'
              }
            }
          }
    }

  return (
    <div >
        <Line data={data} options={options} ref={chartRef}  />
        <p className='hidden md:block text-end font-Body p-text my-5'>24hr Floor Price</p>
    </div>
  )
}

export default LineChart