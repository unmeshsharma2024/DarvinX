import React from 'react';
import HelxonLogo from '../assets/HelxonLogo.png';
import './Logo.scss';

export function Logo() {
  return (
    <div className="logo">
      <div className="logo__icon">
        <img src={HelxonLogo} alt="Helxon Logo" />
      </div>
    </div>
  );
}
