import React from 'react';
import eventBus from '../../utils/eventBus';


function Input() {
   
   function setUsername(e){
      eventBus.dispatch('usernameInput:change', e.target.value);
   }

   return (
      <input
         type='text'
         placeholder='Insert your username here...'
         onChange={setUsername}
      />
   )
}

export default Input;