import React from 'react';
import './Routing.css';

// SCREENS
import Home from './screens/Home';
import Detail from './screens/Detail';
import Contact from './screens/Contact';
import Cms from './screens/Cms';
import Profile from './screens/Profile';
import Orders from './screens/Orders';

import NotFound from './screens/NotFound';


import { Routes, Route } from 'react-router-dom';

function Routing() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="detail/:id/:name" element={<Detail />} />
         <Route path="contact" element={<Contact />} />

         <Route path="cms" element={<Cms />}>
            <Route index element={<Profile />} /> {/* by default "/cms" will display Profile */}
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
         </Route>

         <Route path="*" element={<NotFound />} />
      </Routes>
   );
}

export default Routing;
