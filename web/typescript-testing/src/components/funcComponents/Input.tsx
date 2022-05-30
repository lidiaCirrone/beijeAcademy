import React, { FunctionComponent, ChangeEvent } from 'react';

interface InputProps {
   placeholder?: string;
   callback: Function;
}

const Input: FunctionComponent<InputProps> = (props) => {

   const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      props.callback(e.target.value);
   }

   return (
      <input
         placeholder={props.placeholder}
         type='text'
         onChange={onInputChange}
      />
   )
}

export default Input;