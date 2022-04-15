import React from 'react';
import './Routing.css';

//SCREENS
import SignUp from './screens/SignUp';

import NotFound from './screens/NotFound';



import { Routes, Route } from "react-router-dom";
import { routes } from './routes/routes';

function Routing() {

   return (
      <Routes>

         <Route path={routes.SIGNUP} element={<SignUp />} />
         <Route path="*" element={<NotFound />} />

      </Routes>
   );
}

export default Routing;
