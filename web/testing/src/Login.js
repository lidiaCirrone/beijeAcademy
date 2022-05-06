import React, { useEffect } from 'react';


function Login() {

   useEffect(() => {
      let listener = document.addEventListener('on_send_message_button', (e) => {
         e.stopImmediatePropagation();
         console.log(e.detail);
      }, false);

      return () => {
         document.removeEventListener(listener);
      }

   }, [])

   return (
      <>
      </>
   )
}

export default Login;