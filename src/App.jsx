import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';

function AppContent() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-slate-900">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <BottomNavBar />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
