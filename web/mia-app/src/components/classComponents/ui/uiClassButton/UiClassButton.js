import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './UiClassButton.css';


class UiClassButton extends Component {

   constructor(props) {
      super(props);
      this.msg = 'ciao';
   }

   componentDidMount(){
      console.log('ready html');
   }

   onButtonClick = (e) => {
      this.props.callback();
   }

   componentWillUnmount() {

   }

   render() {
      return (
         <>
            <button onClick={this.onButtonClick}>
               {this.props.label}
            </button>
            <p>
               {this.msg}
            </p>
         </>
      )
   }

}

UiClassButton.defaultProps = {
   label: 'Text'
}

UiClassButton.propTypes = {
   label: PropTypes.string,
   callback: PropTypes.func.isRequired
}

export default UiClassButton;