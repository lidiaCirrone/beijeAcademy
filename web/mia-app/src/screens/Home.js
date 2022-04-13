import React, { Component } from 'react';


// COMPONENTS
import UiClassButton from '../components/classComponents/ui/uiClassButton/UiClassButton';

// STYLES
import './Home.css';


class Home extends Component {

   constructor(props) {
      super(props);

      this.state = {
         showButton: true
      }
   }

   componentDidMount() {

   }

   componentDidUpdate(prevProps, prevState) {
      console.log('prevState', prevState);
      console.log('state', this.state);

   }

   changeState = () => {
      this.setState({
         showButton: false
      })
   }

   componentWillUnmount() {

   }

   render() {
      return (
         <>

            <div className="App">
               ciao componente di classe
            </div>

            <UiClassButton
               callback={this.changeState}
            />

         </>
      )
   }


}

export default Home;