import {AiOutlineArrowUp} from 'react-icons/ai'
import {groupNumber} from "./data"
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'

const ChartCard = () => {
    const option = {
        xAxis:[
            {
                type:'category',
                boundaryGap:false,
                data:['sat','sun','mon','tue','wed','thu','fri']
            }
        ],
        yAxis:[
            {
                type:'value',
                splitLine:{
                    show:false,
                }
            }
        ],
        series:[
            {
                type:'line',
                smooth:'true',
                lineStyle:{
color: new echarts.graphic.LinearGradient(0,0,0,1,[
    {
        offset:0,
        color:'rgb(255,191,0)'
    },
    {
        offset:1,
        color:'#F450D3'
    }
]),
width:2
                },
                areaStyle:{
                    opacity:.5,
                    color: new echarts.graphic.LinearGradient(0,0,0,0.8,
                        [
                            {
                                offset:0,
                                color:'#FE4C00'
                            },
                            {
                                offset:1,
                                color:'rgba(255,144,70,0.1)'
                            },
                        ])
                },
                showSymbole:false,
                data:[28000,19000,32000,10000,41000,30000,26000]
            }
        ]
    }
  return (
    <div className="mt-5 max-w-[750px] w-full p-4 bg-black/60 rounded-lg">
    <h3>Overview Statistics</h3>    
        <div className="py-2 mt-3 border-y-[0.3px] border-zinc-800 bg-gradient-to-r from-black via-zinc-900 to-black flex justify-between items-center" >
<div className='flex gap-4 items-center'>
    <span className='w-5 h-5  inline-flex items-center justify-center rounded-md text-black bg-gradient-to-r from-orange-700 to-orange-400'><AiOutlineArrowUp /></span>
    <div>
        <p className='text-[10px]'>Top item this mounth</p>
        <p className='text-sm'>office comps</p>
    </div>
</div>

<div className='flex flex-col items-center '>
    <span className='text-xs'>Items</span>
    <span className='text-sm'>$ {groupNumber(455)}</span>
</div>
<div className='flex flex-col items-center'>
    <span className='text-xs'>Profit</span>
    <span className='text-sm'>$ {groupNumber(370000)}</span>
</div>
<div className='flex flex-col items-center'>
    <span className='text-xs'>Daily average</span>
    <span className='text-sm'>$ {groupNumber(455)}</span>
</div>


        </div>

        <div className="max-w-[750px] w-full">
<ReactECharts  option={option} />
</div>
    
        </div>
  )
}

export default ChartCard