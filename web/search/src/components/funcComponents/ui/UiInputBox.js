import React from 'react';
import PropTypes from 'prop-types';

function UiInputBox(props) {

   const onInputChange = (e) => {
      props.callback(e.target.value);
   }

   return (
      <input
         placeholder={props.placeholder}
         onChange={onInputChange}
      />
   )
}

UiInputBox.defaultProps = {
   type: 'text'
}

UiInputBox.propTypes = {
   type: PropTypes.string,
   placeholder: PropTypes.string,
   callback: PropTypes.func
}

export default UiInputBox;