import React from 'react';
import Login from '../../Login';


function Home() {

   const data = [0, 1, 2, 5, 6, 7];

   const sendEventCustom = () => {
      document.dispatchEvent(new CustomEvent('on_send_message_button', { // dev'essere una stringa univoca
         detail: data
      }));
   }

   return (
      <>
         <button onClick={sendEventCustom}>Send Event</button>
         <Login />
      </>
   )
}

export default Home;