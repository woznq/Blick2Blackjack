import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import AnimatedCard from './AnimatedCard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Strona Główna</Link></li>
          <li><Link to="/about">O Nas</Link></li>
          <li><Link to="/animated-card">Animated Card</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/animated-card" element={<AnimatedCard />} />
      </Routes>
    </div>
  );
};

export default App;
