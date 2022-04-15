import React from 'react';
import './Routing.css';

// SCREENS
import Home from './screens/Home';
import Detail from './screens/Detail';
import Contact from './screens/Contact';

import NotFound from './screens/NotFound';


import { Routes, Route } from 'react-router-dom';

function Routing() {
   return (
      <Routes>
         <Route index path="/" element={<Home />} />
         <Route path="detail/:id" element={<Detail />} />
         <Route path="contact" element={<Contact />} />

         <Route path="*" element={<NotFound />} />
      </Routes>
   );
}

export default Routing;
