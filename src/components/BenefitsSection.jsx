import { FiZap } from 'react-icons/fi';
import { GiCrown } from 'react-icons/gi';
import { RiGamepadFill } from 'react-icons/ri';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Método Exclusivo e Prático',
      description: 'Aprenda estratégias validadas para vencer a roleta, mesmo sem experiência prévia',
      icon: RiGamepadFill,
      gradientClass: 'purple',
    },
    {
      title: 'Suporte e Acompanhamento VIP',
      description: 'Tenha acesso a uma equipe dedicada para tirar dúvidas e guiar seu progresso',
      icon: GiCrown,
      gradientClass: 'yellow',
    },
    {
      title: 'Saques Rápidos e Seguros',
      description: 'Ganhe e saque de forma prática com orientações sobre os melhores métodos de pagamento',
      icon: FiZap,
      gradientClass: 'green',
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="text-center mb-16">
          <h2 className="benefits-title">Por Que Escolher o Método Royal?</h2>
          <p className="benefits-description">
            Uma abordagem realista e eficiente para dominar a roleta e gerar renda com consistência
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map(({ title, description, icon: Icon, gradientClass }, i) => (
            <div key={i} className="benefit-card">
              <div className={`benefit-icon-wrapper ${gradientClass}`}>
                <Icon aria-label={title} role="img" />
              </div>
              <h3 className="benefit-title">{title}</h3>
              <p className="benefit-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
