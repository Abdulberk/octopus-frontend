import React from 'react';
import VerticalDivider from './icons/VerticalDivider';
import OverviewActions from './icons/OverviewActions';

interface EventProps {
  icon: React.ReactNode;
  date: string;
  title: string;
 
}

const Event: React.FC<EventProps> = ({ icon, date, title }) => {
  return (
    <div className="w-full h-auto flex flex-row gap-x-4 justify-start items-start">
         <div className = "iconAndDivider flex flex-col gap-y-[6.5px]">
      <div className="w-4 h-4 flex items-center justify-center">{icon}</div>

        <div className = "w-auto flex items-center justify-center">
          <VerticalDivider />
          </div>
          </div>
      <div className="flex flex-col font-['Helvetica'] gap-y-[4.5px]">
        <p className="text-[#2D3748] font-bold text-[14px] leading-[140%]">{title}</p>
        <p className="text-[#A0AEC0] font-bold text-[12px] leading-[150%]">{date}</p>
      </div>
    </div>
  );
};

type OrdersOverviewHeaderProps = {
  headerTitle?: string;
};


const OrdersOverviewHeader: React.FC = ({headerTitle}:OrdersOverviewHeaderProps) => {
  return (
    <div className="w-auto h-auto flex gap-y-1.5 flex-col font-['Helvetica']">
      <h1 className="text-[#2D3748] font-bold leading-[140%] text-[18px]">{
        headerTitle ? headerTitle : "Orders Overview"
      }</h1>
      <p className="text-[#A0AEC0] font-normal leading-[140%] text-[14px]">
        <span className="text-[#48BB78] font-bold">+30%</span> this month
      </p>
    </div>
  );
};

const OrdersOverview: React.FC = () => {
  const events = [
    {
      icon: <OverviewActions action="notification" />,
      date: '22 DEC 7:20 PM',
      title: '$2400, Design changes',
    },
    {
      icon: <OverviewActions action="order" />,
      date: '21 DEC 11:21 PM',
      title: 'New order #4219423',
    },
    {
      icon: <OverviewActions action="payment" />,
      date: '21 DEC 9:28 PM',
      title: 'Server Payments for April',
    },
    {
      icon: <OverviewActions action="newCard" />,
      date: '20 DEC 3:52 PM',
      title: 'New card added for order #3210145',
    },
    {
      icon: <OverviewActions action="unlock" />,
      date: '19 DEC 11:35 PM',
      title: 'Unlock packages for Development',
    },
    {
      icon: <OverviewActions action="order" />,
      date: '18 DEC 4:41 PM',
      title: 'New order #9851258',
    },
  ];

  return (
    <div className="w-auto h-auto flex flex-col gap-y-[35px] justify-start items-start">
      <OrdersOverviewHeader />
      <ul className="w-auto h-auto flex flex-col gap-y-[5.5px] justify-start items-start">
        {events.map((event, index) => (
          <li className="w-full h-auto flex flex-row gap-x-[19px] justify-start items-start" key={index}>
            <Event {...event} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersOverview;
