import React from 'react';
import PropTypes from 'prop-types';

function UiInputBox(props) {

   const onInputChange = (e) => {
      props.callback(e.target.value);
   }

   return (
      <label>
         <span>
            {props.label}
         </span>
         <input
            value={props.value}
            type={props.type}
            min={props.min}
            max={props.max}
            placeholder={props.placeholder}
            onChange={onInputChange}
            tabIndex={props.tabIndex}
         />
      </label>
   )
}

UiInputBox.defaultProps = {
   type: 'text'
}

UiInputBox.propTypes = {
   label: PropTypes.string.isRequired,
   value: PropTypes.string,
   type: PropTypes.string,
   min: PropTypes.number,
   max: PropTypes.number,
   placeholder: PropTypes.string,
   callback: PropTypes.func,
   tabIndex: PropTypes.string
}

export default UiInputBox;