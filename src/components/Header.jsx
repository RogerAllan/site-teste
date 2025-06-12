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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLogin = () => {
    // You can replace this with your actual login logic
    // For now, it scrolls to hero section
    scrollToSection('hero');
  };

  const handleSignup = () => {
    // Scroll to pricing section for signup
    scrollToSection('pricing');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="container">
        <div className="brand">
          <Crown />
          <div className="brand-text">Curso Mestre da Roleta</div>
        </div>

        <nav className="nav">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            Início
          </a>
          <a href="#modules" onClick={(e) => { e.preventDefault(); scrollToSection('modules'); }}>
            Módulos
          </a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>
            Depoimentos
          </a>
          <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>
            Benefícios
          </a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>
            Preço
          </a>
        </nav>

        <div className="actions">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <button className="join-button" onClick={handleSignup}>
            Inscreva-se
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;