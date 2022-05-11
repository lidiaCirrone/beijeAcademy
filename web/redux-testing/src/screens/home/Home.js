import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { setCategory } from '../../redux/ducks/categoriesDuck';

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

   return (
      <main>
         <h1>Home</h1>
         {/* Category inside Home: {props.categoriesDuck.category} */}
         <button onClick={goToResults}>Go to Results</button>
      </main>
   );
}

export default connect()(Home);
