import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx'
import MainPage from './pages/MainPage/MainPage.jsx';
import Tutorial from './pages/HomePage/Tutorial/Tutorial.jsx'; // 추가
import Details from './pages/MainPage/Details/Details.jsx';

export default function App() {
  return (
    <div className="w-screen h-screen">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/tutorial" element={<Tutorial />} /> {/* 추가 */}
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
    </div>
  )
}
