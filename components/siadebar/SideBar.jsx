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
        icon:AiOutlineTable,
        to:'/table'
    }
]

const SideBar = () => {


const router=useRouter()


  return (
    <div className='p-2 px-4 flex flex-col items-center h-full bg-zinc-900'>

        <div className='mt-5'><img src="/assets/avatar.png" className='w-[2rem]' alt="" /></div>
        <div className='flex flex-col h-full mt-20 gap-16'>
{links.map(el=><Link key={el.id} href={el.to} className={`${router.pathname===el.to && 'text-red-600'} hover:text-red-600 duration-200 `}><el.icon size={25}/></Link>)}
        </div>
    </div>
  )
}

export default SideBar