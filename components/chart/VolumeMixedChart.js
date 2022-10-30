
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

const VolumeMixedChart=()=>{
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
          data: [500,400,700,600,300,900,400,900,1200,300,650,300],
          fill: false,
          borderColor:"rgba(128, 255, 219, 1)",
          pointBorderColor:"transparent",
          tension:0.2,
        }
          ,{
          type: 'bar',
          label: 'Bar Dataset',
          data: [700, 500, 1000, 150,400,500,1000,300,700,500,400,700,300],
          borderColor: 'rgba(105, 42, 220, 1)',
          backgroundColor: 'rgba(105, 42, 220, 1)'
        }, ]
      };

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
              ticks:{ 
                color: '#fff',
                fontSize: 12,
            }
            },
            y:{ 
              ticks:{
              color: '#fff',
              fontSize: 12,
              stepSize: 300
              },
              grid: {
                drawBorder: true,
                color: 'rgba(56, 33, 98, 1)',
              },
            max: 1200,
            min: 0,
          }
        },
    }
    return(
        <div className=''>
            <div className='mx-auto max-w-[1440px] w-[90%] my-10  border_box2 md:p-5 p-2 font-Header font-[600]'>
              <div className='flex my-5 justify-between'>
                <p className='p-text font-bold'>Volume</p>
                <div className="bg-area grid grid-cols-3 gap-3 rounded-[12px] p-1 font-Body m p-small-text md:w-1/2 lg:w-[30%]">
                    <p className="py-2 text-center rounded-[8px] bg-[#190935] text-sub2">1hr</p>
                    <p className="py-2 text-center rounded-[8px] ">12hrs</p>
                    <p className="py-2 text-center rounded-[8px] ">24hrs</p>
                  </div>
              </div>
              <div className='mx-auto w-[95%]'>
            <Chart  data={data} options={options}/>
            </div>
          </div>
        </div>

    )
}
export default VolumeMixedChart