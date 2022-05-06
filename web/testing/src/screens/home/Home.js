import React from 'react';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import './Home.css';

const Home = () => {

   let eventsArray = [
      { title: 'Struttura a', start: '2022-05-03', end: '2022-05-07', backgroundColor: 'green' },
      { title: 'Struttura b', start: '2022-05-05', end: '2022-05-15', backgroundColor: 'red' },
      { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' },
      { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' },
      { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' },
      { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' },
      { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' },
      { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' },
      { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' },
      { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' }
   ]

   return (
      <div>
         <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            // weekends={false}
            // eventColor='green'
            /* events={[
               eventsArray.map(item => {
                  return ({
                     title: item.title,
                     start: item.start,
                     end: item.end
                  })
               })
            ]} */
            events={[
               { title: 'Struttura a', start: '2022-05-03', end: '2022-05-07', backgroundColor: 'green' },
               { title: 'Struttura b', start: '2022-05-05', end: '2022-05-15', backgroundColor: 'red' },
               { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' },
               { title: 'Struttura d', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'blue' },
               { title: 'Struttura d', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'blue' },
               { title: 'Struttura e', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'yellow' },
               { title: 'Struttura c', start: '2022-05-14', end: '2022-05-27', backgroundColor: 'purple' },
               { title: 'Struttura f', start: '2022-05-16', end: '2022-05-22', backgroundColor: 'pink' },
               { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' },
               { title: 'Struttura c', start: '2022-05-10', end: '2022-05-22', backgroundColor: 'purple' }
            ]}
         />
      </div>
   )
}


export default Home;