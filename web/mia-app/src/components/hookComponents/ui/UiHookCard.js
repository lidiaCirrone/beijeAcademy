import React, { useState } from 'react';

// ASSETS
import logo from '../../assets/images/ui/logo.svg';

// COMPONENTS
import UiInputBox from '../../components/funcComponents/ui/uiInputBox/UiInputBox';



function Home() {

   const [state, setState] = useState(
      {
         name: ''
      }
   )

   function callbackFirstName(firstNameValue) {
      setState({
         ...state,
         name: firstNameValue
      })
   }


   return (
      <>

         <header>
            <img src={logo} className="App-logo" alt="logo" />
         </header>

         <main>

            <div className={'flex-container'}>
               <UiInputBox
                  label={'First name*'}
                  name={'firstname'}
                  placeholder={'First name'}
                  required
                  callback={callbackFirstName}
                  tabIndex={'1'}
               />
            </div>

            {state.name}

         </main>

      </>
   );
}

export default Home;
