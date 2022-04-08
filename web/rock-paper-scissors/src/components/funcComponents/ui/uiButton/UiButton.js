import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import './UiButton.css';


function UiButton(props) {

   const onButtonClick = (e) => {
      props.callback(props.label);
   }

   return (
      <button
         onClick={onButtonClick}>
         {props.label}
      </button>
   )
}

UiButton.defaultProps = {
   label: 'text'
}

UiButton.propTypes = {
   label: PropTypes.string.isRequired,
   callback: PropTypes.func
}

export default UiButton;