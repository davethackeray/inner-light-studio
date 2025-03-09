import React from 'react';
import './ArtyButton.scss';

export const ArtyButton = ({ 
  children,
  variant = 'primary',
  size = 'medium',
  isAnimated = true,
  onClick,
  className = '',
  ...props 
}) => {
  const buttonClasses = [
    'arty-button',
    `arty-button--${variant}`,
    `arty-button--${size}`,
    isAnimated && 'arty-button--animated',
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      <span className="arty-button__content">
        {children}
      </span>
      <span className="arty-button__decoration"></span>
    </button>
  );
};

ArtyButton.displayName = 'ArtyButton';

export default ArtyButton;
