
import CartIcon from './icons/CartIcon';
import ProgressBar from '../ProgressBar';
import WalletIcon from './icons/WalletIcon';
import RegisterIcon from '../RegisterIcon';
import BuildIcon from '../BuildIcon';

interface ActiveUserCardProps {
  title: string;
  value: number;

}





const ActiveUserCard = ({ title, value }: ActiveUserCardProps) => {


  const formatNumber = (value: number, type: string): string => {
    const locale = 'en-US';
    const options: Intl.NumberFormatOptions = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
  
  
  
    if (type === 'users') {
      return value.toLocaleString(locale);
    } else if (type === 'sales') {
      options.style = 'currency';
      options.currency = 'USD';
      return value.toLocaleString(locale, options);
    } else if (type === 'items') {
      return value.toString();
    } else if (type === 'clicks') {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(2) + 'm';
      }
      if (value >= 1000) {
        return (value / 1000).toFixed(2) + 'k';
      }
      return value.toString();
    }
    return value.toString();
  };
  
  
  
  const placeIcons = (type: string) => {
    if (type === 'users') {
      return <RegisterIcon size="mini" />;
    } else if (type === 'sales') {
      return <WalletIcon size="mini" />;
    } else if (type === 'items') {
      return <BuildIcon size="mini" />;
    } else if (type === 'clicks') {
      return <CartIcon size="mini" />;
    }
    return <CartIcon size="mini" />;
  }
  
  const calculateProgressValue = (value: number, type: string) => {
  
    if (type === 'users') {
      return (value / 100000) * 100;
    } else if (type === 'sales') {
      return (value / 5000) * 100;
    } else if (type === 'items') {
      return (value / 500) * 100;
    } else if (type === 'clicks') {
      return (value / 5000000) * 100;
    }
    return (value / 100000) * 100;
  }



  const formattedValue = formatNumber(value, title.toLowerCase());

  return (
    <div className="w-auto h-auto flex flex-col gap-y-1.5 min-w-[101px] justify-start items-start">
      <div className="flex flex-row w-auto h-auto items-center justify-start gap-x-[10px]">
        <div className="rounded-[6px] bg-[#4FD1C5] flex items-center justify-center w-[25px] h-[25px] shadow-activeListItem">
          {placeIcons(title.toLowerCase())}
        </div>
        <p className="text-[#A0AEC0] text-[12px] font-bold leading-[150%]">{title}</p>
      </div>
      <p className="text-[#2D3748] text-[18px] leading-[140%] font-bold">{formattedValue}</p>
      <span className="pl-[1px] w-full">
        <ProgressBar value={
          calculateProgressValue(value, title.toLowerCase())
        } showPercentage = {false} width={100}/>
      </span>
    </div>
  );
};

export default ActiveUserCard;
