import React, { Component } from 'react';

class UiCard extends Component {

   constructor(props) {
      super(props);

      this.state = {
         name: ''
      }
   }

   changeState = () => {
      this.setState(
         {
            name: 'The state has now changed'
         }
      )
   }

   render() {
      return (
         <>
            {this.state.name}
            <button onClick={this.changeState}>Change state</button>
         </>
      )
   }

}

export default UiCard;