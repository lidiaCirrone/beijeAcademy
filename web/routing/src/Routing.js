import React from 'react';
import './Routing.css';

//SCREENS
import Home from './screens/Home';
import Detail from './screens/Detail';
import Contact from './screens/Contact';
import ClassScreen from './screens/ClassScreen';

//CMS
import Cms from './screens/Cms';
import Profile from './screens/cms/Profile';
import Orders from './screens/cms/Orders';

import NotFound from './screens/NotFound';

import { Routes, Route } from "react-router-dom";

import {routes} from './routes/routes';

function Routing() {

  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.DETAIL} element={<Detail />} />
      <Route path={routes.CONTACT} element={<Contact />} />
      <Route path={routes.CLASSSCREEN} element={<ClassScreen />} />

      <Route path={routes.CMS} element={<Cms />}>
        <Route path={routes.PROFILE} element={<Profile />} />
        <Route path={routes.ORDERS} element={<Orders />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default Routing;
