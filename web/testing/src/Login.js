import React, { useEffect } from 'react';

// utils
import eventsBus from './utils/eventsBus';


function Login() {

   useEffect(() => {
      eventsBus.on('on_send_message_button', (data) => {
         console.log(data);
      }, false);

      return () => {
         eventsBus.remove('on_send_message_button');
      }

   }, [])

   return (
      <>
      </>
   )
}

export default Login;