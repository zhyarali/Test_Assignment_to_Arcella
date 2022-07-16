import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/css/main.css'
import './assets/css/home.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Routes>
          <Route path="/" element={ <App />}></Route>
        </Routes>

    </Router>
  </React.StrictMode>
);


