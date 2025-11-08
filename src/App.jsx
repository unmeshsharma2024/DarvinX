import React, { Suspense, useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ContactUsPage = React.lazy(() => import('./pages/ContactUsPage'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));
const PlatformPage = React.lazy(() => import('./pages/PlatformPage'));
const AboutUsPage = React.lazy(() => import('./pages/AboutUsPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const BottomNavBar = React.lazy(() =>
  import('./components/BottomNavBar').then((module) => ({
    default: module.BottomNavBar,
  }))
);
const Footer = React.lazy(() =>
  import('./components/Footer').then((module) => ({
    default: module.Footer,
  }))
);

function AppContent() {
  const [isMainReady, setIsMainReady] = useState(false);
  const handleMainReady = useCallback(() => {
    setIsMainReady(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-slate-900">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense
          fallback={<div className="py-20 text-center text-slate-500">Loading...</div>}
        >
          <RoutesWithReady onReady={handleMainReady} />
        </Suspense>
      </main>
      {isMainReady ? (
        <Suspense fallback={null}>
          <BottomNavBar />
        </Suspense>
      ) : null}
      {isMainReady ? (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      ) : null}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

function RoutesWithReady({ onReady }) {
  React.useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/platform" element={<PlatformPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
