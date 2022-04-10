import React, { useState } from 'react';

// COMPONENTS
import UiInputBox from '../../components/hookComponents/ui/UiInputBox';

// STYLES
import './Home.css';

// UTILS
import { getTVSeries } from '../../utils/utils';


function Home() {

   const [state, setState] = useState({
      searchString: '',
      obj: getTVSeries(),
      visibleData: getTVSeries()
   });

   const inputCallback = (string) => {
      console.log(string);
      setState({
         ...state,
         searchString: string.toLowerCase(),
         visibleData: state.obj.filter(item => item.name.toLowerCase().startsWith(string.toLowerCase()))
         // TO-DO use .match() to avoid .toLowerCase()
         // visibleData: state.obj.filter(item => item.name.match(`/${string}/i`))
      })
   }

   const deleteCallback = (itemId) => (e) => {
      let newObj = state.obj;
      console.log(`deleting "${newObj[itemId].name}", index: ${itemId}`);
      delete (newObj[itemId]);
      setState({
         ...state,
         obj: newObj,
         visibleData: newObj.filter(item => item.name.toLowerCase().startsWith(state.searchString))
      })
   }

   const renderListItem = (item, key) => {
      return (
         <li key={key}>
            <span>{item.name}</span>
            <span>{item.seasons} seasons</span>
            <span>first aired in {item.year}</span>
            <span className={'delete-icon'} onClick={deleteCallback(item.id)}>x</span>
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
