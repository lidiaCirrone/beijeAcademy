import React from 'react';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { initCategory } from '../../../redux/ducks/categoriesDuck';


function ResultsLabel(props) {

   const navigate = useNavigate();

   const goToHome = () => {
      navigate('/');
   }

   const resetCategory = () => {
      props.dispatch(initCategory());
   }

   return (
      <>
         <h1>ResultsLabel</h1>
         Category inside ResultsLabel: {props.categoriesDuck.category}
         <button onClick={resetCategory}>RESET CATEGORY</button>
      </>
   )
}

const mapStateToProps = state => ({
   categoriesDuck: state.categoriesDuck
})

export default connect(mapStateToProps)(ResultsLabel);