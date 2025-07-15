import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Apps from './pages/Apps';
import Docs from './pages/Docs';
import Feeds from './pages/Feeds';
import Business from './pages/Business';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/business" element={<Business />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
