import React from "react";

function Home() {
  return (
    <main className="app-background">
      <div className="phone-frame">
        <div className="phone-screen">
          <section className="mobile-section hero-mobile">
            <div className="top-bar">
              <span className="logo">Sport<span>UP</span></span>
              <span className="menu">☰</span>
            </div>

            <div className="hero-content">
              <h1>
                Добро пожаловать <br />
                в <span>SportUP</span>
              </h1>

              <p>
                Цифровая экосистема доверия, которая помогает спортсменам
                фиксировать развитие, подтверждать достижения и создавать
                репутационный капитал.
              </p>
            </div>
          </section>

          <section className="mobile-section about-mobile">
            <p className="section-label">О НАС</p>

            <h2>
              Мы создаём новую культуру доверия в спорте
            </h2>

            <p>
              Мы — команда исследователей возможностей использования Web3/Web4
              технологий для модернизации и эволюции системы управления спортом
              в Украине.
            </p>

            <p>
              Мы верим, что блокчейн-экосистемы порождают прозрачность,
              верификацию и доверие.
            </p>

            <p className="accent-text">
              Доверие — это квантовый двигатель изменений и развития.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;