import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { setCategory } from '../../redux/ducks/categoriesDuck';

// Components
import ResultsLabel from '../../components/hookComponents/resultsLabel/ResultsLabel';

// STYLES
import './Home.css';


function Home(props) {

   const navigate = useNavigate();

   useEffect(() => {
      props.dispatch(setCategory('test'));
   })

   const goToResults = () => {
      navigate('/results');
   }

   const changeCategory = () => {
      props.dispatch(setCategory('changed'));
   }

   return (
      <main>
         <h1>Home</h1>
         <button onClick={goToResults}>Go to Results and set Category to Test</button>
         <button onClick={changeCategory}>Change category</button>
         <ResultsLabel />
      </main>
   );
}

export default connect()(Home);
