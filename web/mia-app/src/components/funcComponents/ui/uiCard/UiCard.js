import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import './UiCard.css';


function UiCard(props) {
   return (
      <div className={'card'}>
         {props.header}
         {props.content}
         {props.footer}
      </div>
   )
}

UiCard.defaultProps = {
}

UiCard.propTypes = {
   header: PropTypes.element,
   content: PropTypes.element,
   footer: PropTypes.element
}

export default UiCard;