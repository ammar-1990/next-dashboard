import ReactECharts from 'echarts-for-react'

const PieChart = () => {


    const option = {
series:[
    {
        name:'item',
        type:'pie',
        radius:['65%',"80%"],
        avoidLabelOverlap:false,
        itemStyle:{
            borderRadius:50,
            borderColor:'black',
            borderWidth:4,
        },
       label: {
show:false,
position:'center'
       },

       emphasis:{
        label:{
            show:true,
            fontSize:20,
            fontWeight:"bold",
            color:'white'

        }
       },
        data:[
            {value:2190,name:'Search Engine'},
            {value:735,name:'Direct'},
            {value:580,name:'Email'},
            {value:484,name:'Union Ads'},
        ]
    }
]

    }
  return (
   <ReactECharts style={{height:120,marginTop:'1rem'}} option={option}/>
  )
}

export default PieChart