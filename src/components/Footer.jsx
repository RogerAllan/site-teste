import { GiCrown } from 'react-icons/gi';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <div className="footer-brand">
            <GiCrown />
            <div className="footer-brand-text">Mestre da Roleta</div>
          </div>
          <p className="footer-description">
            Domine a roleta com estratégias comprovadas. Curso 100% online, com suporte dedicado e acesso vitalício. Jogue com inteligência, não com sorte.
          </p>
          <div className="footer-icons">
            <a href="mailto:contato@mestredaroleta.com" className="footer-icon" aria-label="Email">
              <HiOutlineMail />
            </a>
            <a href="tel:+5511999999999" className="footer-icon" aria-label="Telefone">
              <HiOutlinePhone />
            </a>
          </div>
        </div>

        {/* Espaço para adicionar outros blocos no footer futuramente */}

      </div>
    </footer>
  );
};

export default Footer;
