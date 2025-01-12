import React from 'react';

const Header = () => (
  <header className="bg-gradient-to-r from-gradientStart to-gradientEnd text-white p-6 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-4xl font-bold">Tommy's Profile</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-accent">About</a></li>
          <li><a href="#projects" className="hover:text-accent">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;