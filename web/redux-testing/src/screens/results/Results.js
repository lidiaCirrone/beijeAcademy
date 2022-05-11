import React from 'react';

import { useNavigate } from 'react-router-dom';

import {connect} from 'react-redux';
import { initCategory } from '../../redux/ducks/categoriesDuck';

// STYLES
import './Results.css';


function Results(props) {

   const navigate = useNavigate();

   const goToHome = () => {
      navigate('/');
   }

   const resetCategory = () => {
      props.dispatch(initCategory());
   }

   return(
      <main>
         <h1>Results</h1>
         Category inside Results: {props.categoriesDuck.category}
         <button onClick={goToHome}>Go to Homepage</button>
         <button onClick={resetCategory}>RESET CATEGORY</button>
      </main>
   )
}

const mapStateToProps = state => ({
   categoriesDuck: state.categoriesDuck
})

export default connect(mapStateToProps)(Results);