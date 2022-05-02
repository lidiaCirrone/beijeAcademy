import React, { useEffect, useState } from 'react';

// styles
import './Home.css';

// utils
import { colorsArray } from '../../utils';


function Home() {

   const [state, setState] = useState({
      data: []
   })

   useEffect(() => {
      setState({
         ...state,
         data: colorsArray
      })
   }, [])

   const setQuery = (e) => {
      let filteredArray = colorsArray;
      if (e.target.value.length > 0) {
         filteredArray = filteredArray.filter(item => item.color.startsWith(e.target.value));
      }
      setState({
         ...state,
         data: filteredArray
      })
   }

   return (
      <div className='container'>
         <main>
            <input type={'text'} onChange={setQuery} placeholder={'search...'} />
            <ul>
               {state.data.map(renderData)}
            </ul>
         </main>
      </div>
   );
}

const renderData = (item, key) => {
   return (
      <li key={`item-${key}`} style={{
         color: item.color
      }}>
         {item.color}
      </li>
   )
}

export default Home;
