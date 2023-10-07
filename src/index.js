import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Foricon from './components/foricon/Foricon';
import Single from './pages/singlepage/Single';
import Biography from './pages/biography/Biography';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/product/:id' element={<Single />} />
        <Route path='/Biography' element={<Biography />} />
      </Routes>
    </BrowserRouter>
    <Foricon />
  </React.StrictMode>
);

reportWebVitals();
