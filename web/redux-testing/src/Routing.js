import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Home from './screens/home/Home';
import Results from './screens/results/Results';


function Routing() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/results' element={<Results />} />
      </Routes>
   )
}

export default Routing;