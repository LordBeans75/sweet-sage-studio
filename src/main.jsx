import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Schedule from './components/Schedule';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';
import './styles.css'; // Import global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/schedule" />} />
        <Route path="/" element={<App />}>
          <Route path="schedule" element={<Schedule />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/schedule" />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  </React.StrictMode>
);