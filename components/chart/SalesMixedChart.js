
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
  } from 'chart.js';
  import { Chart } from 'react-chartjs-2';

  
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

const SalesMixedChart
=()=>{
    const data = {
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
        datasets: [{
          type: 'line',
          label: 'Line Dataset',
          data: [0.7,0.5,1,0.7,1.3,0.7,1.2,1.5,1.7,1.6,1.8,1.9],
          fill: false,
          borderColor:"rgba(128, 255, 219, 1)",
          pointBorderColor:"transparent",
          tension:0.2,
        }
          ,{
          type: 'bar',
          label: 'Bar Dataset',
          data: [4,3.33,4.667,4,2,6,2.667,6,8,2,4.67,4.33],
          borderColor: 'rgba(105, 42, 220, 1)',
          backgroundColor: 'rgba(105, 42, 220, 1)'
        }, ]
      };

      const options={
        afterDraw: chart=>{
            let ctx= chart.chart.ctx;
            ctx.save();
            let xAxis = chart.scales['x-axis-0'];
            let yAxis = chart.scales['y-axis-0'];
            xAxis.ticks.forEach((value,index) => {
                let x = xAxis.getPixelForTick(index);
                let image = new Image();
                image.src="data:image/png;base64,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",
                ctx.drawImage(image,x-12,yAxis.bottom +10);
            });
            ctx.restore();
        },
        plugins:{
          legend:{
            display: false
              },
              labels:{
                render:'image',
                images:[{
                    src:"https://www.chartjs.org/img/chartjs-logo.svg",
                    width:16,
                    height:16
                }]
              },
              layout: {
                padding: {
                  bottom: 60
                }
              },
            title: {
              display: true,
              text: 'Custom Chart Title'
              
          },
        },
        scales: {
          
            x: {
              ticks:{ 
                color: '#fff',
                fontSize: 12,
            }
            },
            y:{ 
              ticks:{
              color: '#fff',
              fontSize: 12,
              stepSize: 2,
              },
              grid: {
                drawBorder: true,
                color: 'rgba(56, 33, 98, 1)',
              },
            max: 8,
            min: 0,
          }
        },
    }
    return(
        <div className=''>
            <div className='mx-auto max-w-[1440px] w-[90%] my-10  border_box2 md:p-5 p-2 font-Header font-[700]'>
              <div className='flex my-5 justify-between'>
                <p className='p-text'>Sales</p>
                
              </div>
              <div className='mx-auto w-[95%]'>
            <Chart  data={data} options={options}/>
            </div>
            </div>
            
        </div>

    )
}
export default SalesMixedChart
