import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import './Header.scss';

export function Header() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo" onClick={handleLogoClick}>
            <Logo />
          </div>

          {/* Get Started Button */}
          <Button
            variant="outline"
            className="header__button"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
