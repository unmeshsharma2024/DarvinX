import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BottomNavBar.scss';

export function BottomNavBar() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav__container">
        {/* Home Icon */}
        <button 
          className="bottom-nav__item bottom-nav__item--home"
          onClick={() => navigate('/')}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </button>

        {/* Platform Link */}
        <button 
          className="bottom-nav__item bottom-nav__item--link"
          onClick={() => navigate('/platform')}
        >
          <span>Platform</span>
        </button>

        {/* About Us Link */}
        <button 
          className="bottom-nav__item bottom-nav__item--link"
          onClick={() => navigate('/about-us')}
        >
          <span>About Us</span>
        </button>

        {/* Company Dropdown */}
        <div className="bottom-nav__item bottom-nav__item--dropdown">
          <button 
            className="bottom-nav__button"
            onClick={() => toggleDropdown('company')}
          >
            <span>Company</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`dropdown-icon ${activeDropdown === 'company' ? 'open' : ''}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {activeDropdown === 'company' && (
            <div className="bottom-nav__dropdown">
              <button 
                onClick={() => {
                  navigate('/contact-us');
                  setActiveDropdown(null);
                }} 
                className="bottom-nav__dropdown-item"
              >
                Contact Us
              </button>
              <button 
                onClick={() => {
                  navigate('/faq');
                  setActiveDropdown(null);
                }} 
                className="bottom-nav__dropdown-item"
              >
                FAQ
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

