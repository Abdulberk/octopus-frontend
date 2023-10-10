
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from './salesOverviewChartsData';

export const ChartsHeader = ({ title }: {title: string }) => (
  <div className="w-auto flex flex-col h-auto justify-start items-start gap-y-[6px] text-left">
    <p className="text-[18px] text-[#2D3748] font-bold">{title}</p>
    <p className="text-[14px] text-[#A0AEC0]">
      <span className="text-[#48BB78] text-[14px] font-bold">(+5) more</span> in 2021
    </p>
  </div>
);

const SalesOverviewChart = () => {
  return (
    <div className="bg-white flex flex-col gap-y-[41px] justify-start items-start w-full h-full">
      <ChartsHeader title="Sales Overview" />
      <div className="w-full h-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
          <defs>
            <linearGradient id="paint0_linear_10_300" x1="420.5" y1="0" x2="420.5" y2="249.75" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2D3748" stopOpacity="0.36" />
              <stop offset="1" stopColor="#2D3748" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint0_linear_10_306" x1="420" y1="0.5" x2="420" y2="234.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4FD1C5" stopOpacity="0.54" />
              <stop offset="1" stopColor="#4FD1C5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <ChartComponent
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background="transparent"
          legendSettings={{ background: 'white' }}
          height="296.5" 
         
        >
          <Inject services={[SplineAreaSeries, DateTime]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default SalesOverviewChart;
