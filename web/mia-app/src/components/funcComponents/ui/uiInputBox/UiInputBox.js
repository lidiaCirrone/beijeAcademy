import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import './UiInputBox.css';


function UiInputBox(props) {

   function onInputChange(e) {
      props.callback(e.target.value)
   }

   return (
      <label>
         {props.label}
         <input
            onChange={onInputChange}
            name={props.name}
            placeholder={props.placeholder}
            type={props.type}
            required={props.required}
            minLength={props.minLength}
            tabIndex={props.tabIndex}
         />
      </label>
   )
}

UiInputBox.defaultProps = {
   type: 'text',
   required: false
}

UiInputBox.propTypes = {
   label: PropTypes.string,
   name: PropTypes.string,
   placeholder: PropTypes.string,
   type: PropTypes.string,
   required: PropTypes.bool,
   callback: PropTypes.func.isRequired,
   tabindex: PropTypes.string
}

export default UiInputBox;