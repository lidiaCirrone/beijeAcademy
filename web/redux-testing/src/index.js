import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Routing from './Routing';

import { BrowserRouter } from 'react-router-dom';
import ApplicationStore from './ApplicationStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={ApplicationStore}>
      <BrowserRouter>
         <Routing />
      </BrowserRouter>
   </Provider>
);