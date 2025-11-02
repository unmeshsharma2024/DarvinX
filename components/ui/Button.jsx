import React from 'react';
import './Button.scss';

export function Button({ 
  children, 
  variant = 'default', 
  className = '', 
  onClick,
  ...props 
}) {
  const baseClass = 'button';
  const variantClass = `button--${variant}`;
  const combinedClass = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <button 
      className={combinedClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
