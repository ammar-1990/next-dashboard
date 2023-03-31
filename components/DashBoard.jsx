import ChartCard from "./ChartCard"
import { cardsData,groupNumber } from "./data"



const DashBoard = () => {
 
  return (
    <div>
<div className="max-w-[750px] w-full p-4 bg-black/60 rounded-lg">
    <div className="flex justify-between">
        <span className="font-bold">Dashboard</span>
        <select className="outline-none text-black rounded-lg bg-gradient-to-r from-orange-700 to-orange-400 p-1 cursor-pointer">
            <option value="week">1 week</option>
            <option value="mounth">1 mounth</option>
            <option value="year">1 year</option>
        </select>
    </div>
    <div className="flex justify-between mt-4">
{cardsData.map((el,i)=><div key={i}>
    <div className="flex gap-4 items-center"> 
    <span className="text-xs">{el.title}</span>
    <span className={`text-[9px] ${el.change>0?'text-green-500':'text-red-500'}`}>{el.change}</span>
    </div>
    <div className="mt-2"><span className="text-sm">$ </span> 
     <span className="font-bold">  {groupNumber(el.amount)}</span> 
    </div>
</div>)}
    </div>
    
</div>
<ChartCard />


    </div>
  )
}

export default DashBoard