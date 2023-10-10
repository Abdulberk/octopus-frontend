import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export const options = {
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      
      },
      ticks: {
        display: false,
        stepSize: 1, 
        

      },
      offset: true,
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
    


      },
      ticks: {
        display: true,
        color: 'white',
        stepSize: 100,
        font: {
          size: 10,
          weight: 700,
          family: 'Helvetica',
          

        },


      },
    },
  },
  plugins: {
    legend: {
     
      display: false,
    },
    title: {
      display: false,

    
    },

  },
  layout: {
    padding: 0,
  },
};

const labels = ['1', '2', '3', '4', '5', '6', '7', '8']; 

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [0, 100, 200, 300, 400, 500], 
      backgroundColor: '#FFF',
      borderRadius: 200,
      barThickness: 7,

      
      borderWidth: 0,
      minBarLength: 0,
      borderSkipped: false,
      hoverBackgroundColor: '#A0AEC0',

      
    },
  ],
};

const ActiveUsersChart = () => {
  
  return (
    <div className="w-full h-auto max-h-[222px]">
    
        <Bar data={data} options={options} />
  
     
    </div>
  );
};

export default ActiveUsersChart;
