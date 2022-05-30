import React, { FunctionComponent, MouseEvent } from 'react';

interface ButtonProps {
   label: string;
   color?: string;
   callback: Function;
}

const Button: FunctionComponent<ButtonProps> = (props) => {

   const onButtonClick = (e: MouseEvent): void => {
      props.callback('ciao');
   }

   return (
      <button onClick={onButtonClick}>{props.label}</button>
   )
}

export default Button;