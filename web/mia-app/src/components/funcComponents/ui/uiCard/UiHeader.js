import React from 'react';
import PropTypes from 'prop-types';


function UiHeader(props) {
   return (
      <>
         <div>
            {props.title}
         </div>
      </>
   )
}

UiHeader.defaultProps = {
}

UiHeader.propTypes = {
   title: PropTypes.string
}

export default UiHeader;