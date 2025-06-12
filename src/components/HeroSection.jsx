import React, { useEffect } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  useEffect(() => {
    // Cria partículas flutuantes
    const container = document.getElementById("particles");
    if (container) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = (Math.random() * 3 + 3) + "s";
        container.appendChild(particle);
      }
    }

    // Função para atualizar o countdown
    function updateCountdown() {
      const now = new Date().getTime();
      const futureDate = now + 24 * 60 * 60 * 1000; // 24 horas a partir de agora

      const distance = futureDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = String(days).padStart(2, "0");
      document.getElementById("hours").textContent = String(hours).padStart(
        2,
        "0"
      );
      document.getElementById("minutes").textContent = String(minutes).padStart(
        2,
        "0"
      );
      document.getElementById("seconds").textContent = String(seconds).padStart(
        2,
        "0"
      );
    }

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    // Event listeners para os botões
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Button clicked:", btn.textContent.trim());
      });
    });

    // Cleanup para evitar memory leaks
    return () => {
      clearInterval(intervalId);
      buttons.forEach((btn) => {
        btn.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="bg-particles" id="particles"></div>

      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* License Badge */}
            <div className="license-badge">
              <svg
                className="sparkle"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="license-text">TESTADO & COMPROVADO</span>
              <svg
                className="sparkle"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            {/* Main Title */}
            <h1 className="hero-title">
              <span className="title-line">Experiencie</span>
              <span className="title-line gradient-text">A Estratégia</span>
              <span className="title-line red-text">Final</span>
            </h1>

            {/* Description */}
            <p className="hero-description">
             Na roleta da vida, uns confiam na sorte, mas os verdadeiros vencedores sabem: o jogo do conhecimento é o único onde cada esforço multiplica seus ganhos, cada desafio superado é um número vencedor, e o jackpot é um futuro que nenhum cassino no mundo pode pagar!
            </p>

            {/* Countdown Timer */}
            <div className="countdown-container">
              <div className="countdown">
                <div className="countdown-item">
                  <span className="countdown-number" id="days">
                    23
                  </span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number" id="hours">
                    15
                  </span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number" id="minutes">
                    42
                  </span>
                  <span className="countdown-label">Minutes</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number" id="seconds">
                    18
                  </span>
                  <span className="countdown-label">Seconds</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="button-group">
              <button className="btn btn-primary" type="button">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19C3 20.1 3.9 21 5 21H11V19H5V3H13V9H21Z" />
                </svg>
                Adquira por R$500
              </button>
              <button className="btn btn-secondary" type="button">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8,3V7H6V3H8M11,3V11H9V3H11M14,3V7H12V3H14M17,3V11H15V3H17M8,9V21H6V9H8M14,9V21H12V9H14" />
                </svg>
                Conheça nossos experts
              </button>
            </div>

            {/* Features */}
            <div className="features">
              <div className="feature">
                <svg
                  className="feature-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                </svg>
                <span>SSL Secured</span>
              </div>
              <div className="feature">
                <svg
                  className="feature-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
                <span>Eficácia comprovada</span>
              </div>
              <div className="feature">
                <svg
                  className="feature-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M11,8C10.4,8 10,7.6 10,7C10,6.4 10.4,6 11,6C11.6,6 12,6.4 12,7C12,7.6 11.6,8 11,8Z" />
                </svg>
                <span>Compra Segura</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
