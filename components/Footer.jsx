import React from 'react';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__copyright">
            © 2024 Helxon Inc. All rights reserved.
          </p>
          <p className="footer__tagline">
            Protecting enterprises worldwide since 2024
          </p>
        </div>
      </div>
    </footer>
  );
}

