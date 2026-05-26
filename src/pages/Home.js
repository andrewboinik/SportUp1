import React, { useState } from "react";
import translations from "../i18n/translations";

function Home() {
  const [language, setLanguage] = useState("ru");

  const t = translations[language];

  return (
    <main className="app-background">
      <div className="phone-frame">
        <div className="phone-screen">

          <div className="language-switcher">
            <button onClick={() => setLanguage("ru")}>RU</button>
            <button onClick={() => setLanguage("uk")}>UA</button>
            <button onClick={() => setLanguage("en")}>EN</button>
          </div>

          <section className="mobile-section hero-mobile">
            <div className="top-bar">
              <span className="logo">
                Sport<span>UP</span>
              </span>

              <span className="menu">☰</span>
            </div>

            <div className="hero-content">
              <h1>{t.heroTitle}</h1>

              <p>{t.heroText}</p>
            </div>
          </section>

          <section className="mobile-section about-mobile">
            <p className="section-label">
              {t.aboutLabel}
            </p>

            <h2>{t.aboutTitle}</h2>

            <p>{t.aboutText1}</p>

            <p>{t.aboutText2}</p>

            <p className="accent-text">
              {t.aboutAccent}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;