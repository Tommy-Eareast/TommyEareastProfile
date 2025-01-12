import React from 'react';

const Button = ({ label, onClick, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className="px-4 py-2 bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded hover:from-accent hover:to-primary transition-all duration-300"
  >
    {label}
  </button>
);

export default Button; 