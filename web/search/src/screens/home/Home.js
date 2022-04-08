import React, { useState } from 'react';

// COMPONENTS
import UiInputBox from '../../components/hookComponents/ui/UiInputBox';

// STYLES
import './Home.css';

// UTILS
import { getTVSeries } from '../../utils/utils';


function Home() {

   const data = getTVSeries();

   const [state, setState] = useState({
      searchString: '',
      visibleData: data
   });

   const inputCallback = (string) => {
      console.log(string);
      setState({
         ...state,
         searchString: string.toLowerCase,
         visibleData: data.filter(item => item.name.toLowerCase().startsWith(string.toLowerCase()))
         // TO-DO use .match() to avoid .toLowerCase()
         // visibleData: data.filter(item => item.name.match(`/${string}/i`))
      })
   }

   const renderListItem = (item, key) => {
      return (
         <li key={key}>
            <span>{item.name}</span>
            <span>{item.seasons} seasons</span>
            <span>first aired in {item.year}</span>
         </li>
      )
   }

   return (
      <main>
         <UiInputBox
            placeholder={'Search...'}
            callback={inputCallback}
         />
         <ul>
            {state.visibleData.map(renderListItem)}
         </ul>
      </main>
   );
}

export default Home;
