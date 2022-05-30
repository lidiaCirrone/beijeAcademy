import React, { FunctionComponent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/funcComponents/Button';
import Input from './components/funcComponents/Input';


interface State {
   text?: string | number;
   textButton?: string;
   obj?: object;
}

const initialState: State = {
   text: '',
   obj: {}
}

const App: FunctionComponent = () => {

   const testCallbackInput = (value: string | number): void => {
      // takes a "value" parameter that can be either string or number
      // doesn't return anything
      // if you take "number" out from line 6 and then try to setState value, it breaks because it could be a number and that would not be accepted!
   }

   const checkMail = (value: string): string => {
      console.log(value);
      return value;
   }

   let name: string = '';
   let stringsArray: string[];
   let objectsArray: Array<object>;
   let num: number;

   const [state, setState] = useState<State>(initialState);

   const setUsername = (value: string): void => {
      setState({
         ...state,
         text: value
      })
   }

   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{state?.text}</p>
            <p>
               <Input
                  placeholder='Insert your name here...'
                  callback={setUsername}
               />
            </p>
            <p>
               <Button
                  label='aaa'
                  callback={checkMail} />
            </p>
         </header>
      </div>
   );
}

export default App;
