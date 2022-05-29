import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Home from './screens/home/Home';
import ApplicationStore from './ApplicationStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={ApplicationStore}>
      <Home />
   </Provider>
);