import {MdSpaceDashboard} from 'react-icons/md'
import {AiFillCalendar} from 'react-icons/ai'
import {FaTasks} from 'react-icons/fa'
import {AiOutlineTable} from 'react-icons/ai'
import Link from 'next/link'

import { useRouter } from 'next/router'



const links =[
    {
        id:'1',
        icon:MdSpaceDashboard,
        to:'/'
    },
    {
        id:'2',
        icon:AiFillCalendar,
        to:'/calendar'
    },
    {
        id:'3',
        icon:FaTasks,
        to:'/tasks'
    },
    {
        id:'4',
        icon:AiOutlineTable,
        to:'/table'
    }
]

const SideBar = () => {


const router=useRouter()


  return (
    <div className='p-2 flex flex-col items-center h-full'>

        <div>Logo</div>
        <div className='flex flex-col h-full justify-evenly'>
{links.map(el=><Link key={el.id} href={el.to} className={router.pathname===el.to && 'text-red-600'}><el.icon size={25}/></Link>)}
        </div>
    </div>
  )
}

export default SideBar