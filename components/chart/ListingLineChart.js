
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

const ListingLineChart=()=>{
  const data = {
      labels: [ '80','90','100','110','110','120','130','140','150' ,""],
      datasets: [{
        type: 'line',
        label: 'Line Dataset',
        data: [110,70,90,150,250,400,500,550,550,],
        fill: false,
        borderColor:"rgba(0, 151, 255, 1)",
        pointBorderColor:"transparent",
        tension:0.3,
      } ]
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
            }},
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
                  
            }},
  }
  return(
      <div className=''>
          <div className='mx-auto max-w-[1440px] w-[90%] my-10  border_box2 md:p-5 p-2 font-Header font-[700]'>
            <div className='flex my-5 justify-between'>
              <p className='p-text'>Listing Distribution</p>
             
            </div>
            <div className='mx-auto w-[95%]'>
          <Chart  data={data} options={options}/>
          </div>
        </div>
      </div>

  )
}
export default ListingLineChart