import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import NotFound from './pages/NotFound';
import './styles/Main.scss';

// deploymentPath is null if url is localhost, otherwise it is the name of the repository
const deploymentPath = process.env.PUBLIC_URL;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={deploymentPath}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);