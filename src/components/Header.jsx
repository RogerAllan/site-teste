import React, { useState, useEffect } from 'react';
import { Crown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="container">
        <div className="brand">
          <Crown />
          <div className="brand-text">Curso Mestre da Roleta</div>
        </div>

        <nav className="nav">
          <a href="#hero">Início</a>
          <a href="#modules">Módulos</a>
          <a href="#testimonials">Depoimentos</a>
          <a href="#benefits">Benefícios</a>
          <a href="#pricing">Preço</a>
        </nav>

        <div className="actions">
          <button className="login-button">Login</button>
          <button className="join-button">Inscreva-se</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
