import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import Home from './screens/home/Home';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
   <React.StrictMode>
      <Home />
   </React.StrictMode>
);