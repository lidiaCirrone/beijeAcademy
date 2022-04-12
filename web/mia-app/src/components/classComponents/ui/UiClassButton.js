import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UiClassButton extends Component {

   constructor(props) {
      super(props);
      this.name = 'ciao';
   }

   callbackButton(){
      this.props.callback(); // si spacca perché così this si riferisce al metodo, e non alla classe. E qui dentro al metodo non c'è props.callback()!
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