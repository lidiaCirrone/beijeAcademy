
import React, { Component } from 'react';
import { Navigate } from "react-router-dom";

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      goHome: false
    }

    console.log('props', props)
    console.log('this', this)
  }

  goTo = () => {
    this.setState({ goHome: true })
  }

  render() {

    return (
      <div>
        <p>
          Contact
        </p>
        <button onClick={this.goTo}>GO to Home</button>
        {
          this.state.goHome === true &&
          <Navigate to="/" replace={true} state={
            {
              id: 98864
            }
          }
          />
        }

      </div >
    );
  }
}


export default Contact;
