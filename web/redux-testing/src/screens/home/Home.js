import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { setToken } from '../../redux/ducks/tokenDuck';

// STYLES
import './Home.css';


function Home(props) {

   useEffect(() => {
      props.dispatch(setToken('fskgsbgosbufbsoebfse'));
   })

   return (
      <main>
         Test
      </main>
   );
}

export default connect()(Home);
