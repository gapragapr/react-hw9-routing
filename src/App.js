import React from 'react'
import { Routes, Route } from 'react-router-dom';

import HomePage from './Components/HomePage/HomePage';
import DriftPage from './Components/DriftPage/DriftPage';
import TimeAttackPage from './Components/TimeAttackPage/TimeAttackPage';
import ForzaPage from './Components/ForzaPage/ForzaPage';
import Menu from './Components/Menu/Menu';

export default function App() {
  return (
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
  );
}