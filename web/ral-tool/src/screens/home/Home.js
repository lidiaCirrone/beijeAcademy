import React, { useState } from 'react';

// COMPONENTS
import UiInputBox from '../../components/hookComponents/ui/uiInputBox/UiInputBox';
import UiButton from '../../components/hookComponents/ui/uiButton/UiButton';

// STYLES
import './Home.css';


function Home() {

   const [state, setState] = useState({
      ralInput: '',
      ral: 0,
      taxes: 0
   });

   const ralCallback = (value) => {
      let ralInt = parseInt(value);
      setState({
         ...state,
         ralInput: value,
         ral: ralInt
      })
   }

   const calculateTaxes = () => {

      let income = state.ral;
      let taxesAmount = 0;
      let taxBrackets = [
         [0, 10000, 0.10],
         [10000, 20000, 0.07],
         [20000, 30000, 0.05],
         [30000, Infinity, 0.03]
      ]

      for (let interval of taxBrackets) {
         console.log('interval:', interval);
         if (income < interval[1]) {
            taxesAmount += (income - interval[0]) * interval[2];
            console.log('amount on which to calculate:', income - interval[0]);
            console.log('taxes:', (income - interval[0]) * interval[2]);
            break;
         } else {
            taxesAmount += (interval[1] - interval[0]) * interval[2];
            console.log('amount on which to calculate:', (interval[1] - interval[0]));
            console.log('taxes:', (interval[1] - interval[0]) * interval[2]);
         }
         console.log('-');
      }

      console.log('-');
      console.log('total taxes:', taxesAmount);

      setState({
         ...state,
         taxes: taxesAmount
      })
   }

   return (
      <main>

         <UiInputBox
            label={'RAL'}
            value={state.ralInput}
            type={'number'}
            placeholder={'insert ral here'}
            callback={ralCallback}
            tabIndex={'1'}
         />

         <UiButton
            label={'Calculate'}
            callback={calculateTaxes}
            tabIndex={'2'}
         />

         <ul>
            <li>RAL: {state.ral}</li>
            <li>Taxes: {state.taxes}</li>
         </ul>

      </main>
   );
}

export default Home;