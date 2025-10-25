import React from 'react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo">
            <Logo />
          </div>

          {/* Get Started Button */}
          <Button
            variant="outline"
            className="header__button"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
