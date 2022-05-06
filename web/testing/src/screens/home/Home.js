import React, {useState} from 'react';
import Login from '../../Login';

// styles
import './Home.css';

// utils
import eventsBus from '../../utils/eventsBus';


function Home() {

   const [state, setState] = useState({
      data: ''
   })

   const saveData = (e) => {
      setState({
         data: e.target.value
      })
   }

   const sendEventCustom = () => {
      eventsBus.dispatch('on_send_message_button', state.data);
   }

   return (
      <main>
         <input type="text" onChange={saveData} value={state.data} />
         <button onClick={sendEventCustom}>Send Event</button>
         <Login />
      </main>
   )
}

export default Home;