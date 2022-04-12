import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UiClassButton extends Component {

   constructor(props) {
      super(props);
      this.name = 'ciao';
   }

   callbackButton = (e) => {
      this.props.callback();
   }

   render() {
      return (
         <>
            <p onClick={this.callbackButton}>
               {this.props.label}
            </p>
            <p>
               {this.name}
            </p>
         </>
      )
   }

}

UiClassButton.defaultProps = {
   label: 'Text'
}

UiClassButton.propTypes = {
   label: PropTypes.string
}

export default UiClassButton;