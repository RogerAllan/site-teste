import { FaStar as Star } from 'react-icons/fa';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'High Roller',
      content: 'The VIP treatment here is unmatched. Lightning-fast withdrawals and exclusive games make this my go-to casino.',
      avatar: '👨‍💼',
      rating: 5,
      winAmount: '$125,000'
    },
    {
      name: 'Sarah Williams',
      role: 'Slot Enthusiast',
      content: 'I hit the mega jackpot on my second week! The game selection is incredible and the bonuses keep coming.',
      avatar: '👩‍💻',
      rating: 5,
      winAmount: '$89,500'
    },
    {
      name: 'David Rodriguez',
      role: 'Poker Pro',
      content: 'The live dealer games feel like being in Vegas. Professional dealers and fair gameplay every time.',
      avatar: '🎩',
      rating: 5,
      winAmount: '$234,750'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Histórias Vencedoras
          </h2>
          <p className="testimonials-subtitle">
            Pessoas Reais, Ganhos Reais, Experiências Reais
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              
              <p className="testimonial-content">"{testimonial.content}"</p>
              
              <div className="testimonial-footer">
                <div className="user-info">
                  <div className="user-avatar">{testimonial.avatar}</div>
                  <div className="user-details">
                    <div className="user-name">{testimonial.name}</div>
                    <div className="user-role">{testimonial.role}</div>
                  </div>
                </div>
                <div className="winnings-info">
                  <div className="winnings-amount">{testimonial.winAmount}</div>
                  <div className="winnings-label">Total Winnings</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;