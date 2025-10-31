import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import PlatformPage from './pages/PlatformPage';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';
import { Footer } from './components/Footer';

function AppContent() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-slate-900">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/platform" element={<PlatformPage />} />
        </Routes>
      </main>
      <BottomNavBar />
      <Footer />
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
