import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/hookComponents/Input';
import { initUser } from '../../redux/ducks/userDuck';
import './Home.css';


function Home(props) {

   useEffect(() => {
      return () => {
         initUser();
      }
   })

   return (
      <main>
         <Input />
         <p>The username you've chosen is:</p>
         <p>{props.userDuck.user}</p>
      </main>
   );
}

const mapStateToProps = state => ({
   userDuck: state.userDuck
})

export default connect(mapStateToProps)(Home);
