import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { MyContext } from '@/components/context'
import { useContext } from 'react'
import { createEventId } from '@/components/data'

const calendar = () => {

  const {state,setState}=useContext(MyContext)
const handleEvents =async (events)=>{
  await Promise.resolve(setState(events))

}

const handleDateSelect=(selectInfo)=>{
  let title =prompt('please enter a title for the event')
  let calendarApi=selectInfo.view.calendar;
  calendarApi.unselect()
  if(title)
  {
    calendarApi.addEvent({
      id:createEventId(),
      title,
      start:selectInfo.start,
      end:selectInfo.end,
      allDay:selectInfo.allDay
    })
  }
}

const handleEventClick =(clickInfo)=>{
  if(confirm('Are you sure you want to delete this event?'))
  clickInfo.event.remove()
}
  return (
    <div className=''>
<div className='max-w-[1200px] w-[100%] m-auto px-[2rem] overflow-y-scroll h-[500px] myTable'>
<FullCalendar 
plugins={[dayGridPlugin,interactionPlugin,timeGridPlugin]}
headerToolbar={{
left:'prev,next today',
center:'title',
right:'dayGridMonth,timeGridWeek,timeGridDay'

}}
allDaySlot={false}
initialView='timeGridWeek'
slotDuration={'01:00:00'}
editable={true}
selectable={true}
selectMirror={true}
dayMaxEvents={true}
weekends={true}
nowIndicator={true}
initialEvents={state}
eventsSet={handleEvents}
select={handleDateSelect}
eventClick={handleEventClick}


/>
  
</div>

    </div>
  )
}

export default calendar