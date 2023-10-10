import {AxisModel } from '@syncfusion/ej2-react-charts';


export const areaPrimaryXAxis: AxisModel = {
  valueType: 'DateTime',
  labelFormat: 'MMM',
  intervalType: 'Months',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  
  labelStyle: {
    color: '#CBD5E0',
    fontWeight: '700', 
    size: '10px', 
  },
  minorTickLines: { width: 0 },
  labelPlacement: 'OnTicks',
  labelPadding: 24,
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  minimum: new Date(2023, 0, 1),
  maximum: new Date(2023, 11, 1),

};

export const areaPrimaryYAxis: AxisModel = {
  valueType: 'Double',
  labelFormat: '{value}',
  lineStyle: { width: 0 },
  maximum: 500,
  interval: 100,
  majorGridLines: { width: 1, color: '#E2E8F0', dashArray: '5', 

},
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: {
    color: '#CBD5E0',
    fontWeight: '700', 
    size: '10px', 
  },
  labelPadding: 24,
  
};
const areaChartData = [
  [
    { x: new Date(2023, 0, 1), y: 500 },
    { x: new Date(2023, 1, 1), y: 400 },
    { x: new Date(2023, 2, 1), y: 300 },
    { x: new Date(2023, 3, 1), y: 400 },
    { x: new Date(2023, 4, 1), y: 200 },
    { x: new Date(2023, 5, 1), y: 270 },
    { x: new Date(2023, 6, 1), y: 290 },
    { x: new Date(2023, 7, 1), y: 350 },
    { x: new Date(2023, 8, 1), y: 350 },
    { x: new Date(2023, 9, 1), y: 320 },
    { x: new Date(2023, 10, 1), y: 300 },
    { x: new Date(2023, 11, 1), y: 400 },

  ],
  [
    { x: new Date(2023, 0, 1), y: 180 },
    { x: new Date(2023, 1, 1), y: 165 },
    { x: new Date(2023, 2, 1), y: 270 },
    { x: new Date(2023, 3, 1), y: 300 },
    { x: new Date(2023, 4, 1), y: 350 },
    { x: new Date(2023, 5, 1), y: 400 },
    { x: new Date(2023, 6, 1), y: 380 },
    { x: new Date(2023, 7, 1), y: 360 },
    { x: new Date(2023, 8, 1), y: 250 },
    { x: new Date(2023, 9, 1), y: 480 },
    { x: new Date(2023, 10, 1), y: 300 },
    { x: new Date(2023, 11, 1), y: 400 },
  ],

];


  
  export const areaCustomSeries = [
    {
      dataSource: areaChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Months',
      opacity: 0.8,
      type: 'SplineArea',
      width: 3,
      border: { width: 3, color: '#2D3748' },
      fill: 'url(#paint0_linear_10_300)',
      
    },
    {
      dataSource: areaChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'Months',
      opacity: 0.8,
      type: 'SplineArea',
      width: 3,
      border: { width: 3, color:  '#4FD1C5'  },
      fill: 'url(#paint0_linear_10_306)',
    },
  
  ];
