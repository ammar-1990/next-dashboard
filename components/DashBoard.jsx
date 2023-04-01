import ChartCard from "./ChartCard"
import { cardsData,groupNumber ,ordersData } from "./data"
import PieChart from "./PieChart"



const DashBoard = () => {
 
  return (
    <div className="flex gap-10">
    <div className="max-w-[750px] w-full">
<div className=" p-4 bg-black/60 rounded-lg">
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
    <div className=" bg-black/60 rounded-lg flex-1 px-8 py-5">
<div className="flex gap-5 justify-center items-center">
    <img src="/assets/avatar.png" alt="" className="w-[2rem]" />
    <p className="uppercase">orders today</p>
</div>
<div className="p-2 mt-3 border-y-[0.3px] border-zinc-800 bg-gradient-to-r from-black via-zinc-900 to-black flex justify-between items-center flex-col gap-4" >
    <span className="text-xs">Amount</span>
    <span className="font-bold">$ {groupNumber(4560)}</span>
</div>

<div className="p-4 flex flex-col gap-3">
{ordersData.map((el,i)=>
<div className="space-y-1" key={i}>
<div className="flex justify-between">
    <span className="text-md">{el.name}</span>
    <span className="text-green-500 text-[10px]">+ ${el.change}</span>
    </div>
<div className="flex justify-between">
<span className="text-xs">{el.type}</span>
    <span className="text-xs">items: {el.items}</span> 
</div>

</div>
)}
</div>
<div>
    <span className="font-bold">Split by orders</span>
    <PieChart />
</div>
    </div>
    </div>
  )
}

export default DashBoard