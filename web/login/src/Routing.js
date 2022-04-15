import React from 'react';

// STYLES
import './Routing.css';

//SCREENS
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import News from './screens/News';
import NotFound from './screens/NotFound';

// UTILS
import { Routes, Route } from "react-router-dom";
import { routes } from './routes/routes';

function Routing() {

   return (
      <Routes>

         <Route path={'/'} element={<SignUp />} />
         <Route path={'signup'} element={<SignUp />} />
         <Route path={'login'} element={<Login />} />
         <Route path={'news'} element={<News />} />
         <Route path="*" element={<NotFound />} />

      </Routes>
   );
}

export default Routing;
