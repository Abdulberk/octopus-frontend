
import MiniCard from './MiniCard'
import type { MiniCardProps } from './MiniCard'
import CartIcon from './icons/CartIcon'
import DocumentIcon from './icons/DocumentIcon'
import GlobeIcon from './icons/GlobeIcon'
import WalletIcon from './icons/WalletIcon'


const HeaderView = () => {

  const miniCardData = [
    {
      title: "Today's Money",
      value: "$53,000",
      icon: <WalletIcon />,
      rate: "+55%"
    },
    {
      title: "Today's Users",
      value: "$2250",
      icon: <GlobeIcon />,
      rate: "+2.4%"
    },
    {
      title: "New Clients",
      value: "$3249",
      icon: <DocumentIcon />, 
      rate: "-14%"
    },
    {
      title: "Total Sales",
      value: "4523",
      icon: <CartIcon />,
      rate: "+2.4%"
    }, 
  ] as MiniCardProps[]



  return (
  
      <div className = "flex flex-row gap-x-6  w-full   col-span-12" >
        {miniCardData.map((card) => (
          <MiniCard
            key = {card.title}
            title = {card.title}
            value = {card.value}
            icon = {card.icon}
            rate = {card.rate}
          />
        ))}
      </div>

  )
}

export default HeaderView