import React, { useEffect, useState } from 'react';
import Input from '../../components/funcComponents/Input';
import eventBus from '../../utils/eventBus';
import './Home.css';


function Home() {

   const [state, setState] = useState({
      username: ''
   })

   useEffect(() => {
      eventBus.on('usernameInput:change', value => {
         setState({
            ...state,
            username: value
         })
      })

      return () => {
         eventBus.remove('usernameInput:change');
      }
   })

   return (
      <main>
         <p>The username you've chosen is:</p>
         <p>{state.username}</p>
         <Input />
      </main>
   );
}

export default Home;
