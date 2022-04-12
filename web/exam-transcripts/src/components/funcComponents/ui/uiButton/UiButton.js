import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import './UiButton.css';


function UiButton(props) {

   function onButtonClick(e) {
      props.callback(e)
   }

   return (
      <button
         onClick={onButtonClick}
         className={[props.customCss]}
         tabIndex={props.tabIndex}>
         {props.label}
      </button>
   )
}

UiButton.defaultProps = {
   customCss: 'buttonContainer'
}

UiButton.propTypes = {
   label: PropTypes.string.isRequired,
   customCss: PropTypes.string,
   callback: PropTypes.func,
   tabIndex: PropTypes.string
}

export default UiButton;