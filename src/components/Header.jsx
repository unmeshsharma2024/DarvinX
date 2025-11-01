import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import AboutUsLogo from '../assets/AboutUs_icons/LOGO.svg';
import { Button } from './ui/Button';
import './Header.scss';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isInHeroSection, setIsInHeroSection] = useState(false);
  const isAboutUsPage = location.pathname === '/about-us' || location.pathname === '/contact-us' || location.pathname === '/faq' || location.pathname === '/platform';

  useEffect(() => {
    if (!isAboutUsPage) {
      setIsInHeroSection(false);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.querySelector('.about-us-hero') || document.querySelector('.contact-us-page__hero') || document.querySelector('.faq-page__hero') || document.querySelector('.vorxoc-hero__hero-container');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // Account for header height
        setIsInHeroSection(scrollPosition < heroBottom);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAboutUsPage]);

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const showWhiteHeader = isAboutUsPage && isInHeroSection;

  return (
    <header className={`header ${showWhiteHeader ? 'header--white' : ''}`}>
      <div className="header__container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo" onClick={handleLogoClick}>
            {showWhiteHeader ? (
              <img src={AboutUsLogo} alt="Helxon" className="header__logo-img" />
            ) : (
              <Logo />
            )}
          </div>

          {/* Get Started Button */}
          <Button
            variant="outline"
            className={`header__button ${showWhiteHeader ? 'header__button--white' : ''}`}
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
