import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './utils/Router'
import './assets/index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    {/* <Signup /> */}
    {/* <Home /> */}

    <Router />


  </React.StrictMode>
);

