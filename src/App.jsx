import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BackgroundEffects from './components/BackgroundEffects';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import SolutionsPage from './pages/SolutionsPage';
import ResourcesPage from './pages/ResourcesPage';
import CompanyPage from './pages/CompanyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <BackgroundEffects />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/company" element={<CompanyPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
