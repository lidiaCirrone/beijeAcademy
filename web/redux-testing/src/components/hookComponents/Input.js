import React from "react";
import { connect } from "react-redux";
import { setUser } from "../../redux/ducks/userDuck";


function Input(props) {

   const setUsername = (e) => {
      console.log(e.target.value);
      props.dispatch(setUser(e.target.value));
   }

   return (
      <input type='text' placeholder='insert your name here...' onChange={setUsername} />
   )
}

export default connect()(Input);