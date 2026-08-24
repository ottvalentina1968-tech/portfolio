import { publicUrl, siteAssets } from '../config';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-aurora" aria-hidden="true" />
      <svg className="hero-lines" viewBox="0 0 720 420" fill="none" aria-hidden="true">
        <path d="M40 280C140 120 240 90 360 160C480 230 560 90 700 40" />
        <path d="M20 340C160 220 280 300 420 210C560 120 620 250 710 190" />
        <circle cx="360" cy="160" r="4" />
        <circle cx="560" cy="90" r="3" />
      </svg>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker rise rise-1">
            <span>Валентина Отт</span>
            <span className="dot" aria-hidden="true" />
            <span>AI & Vibe Coding</span>
          </p>

          <h1 className="hero-title rise rise-2">
            Превращаю идеи
            <br />
            в работающие digital-продукты
            <br />
            <em>с помощью AI</em>
          </h1>

          <p className="hero-lead rise rise-3">
            Создаю сайты, приложения и AI-проекты — от идеи и структуры до
            интерфейса, логики и публикации.
          </p>

          <div className="hero-actions rise rise-4">
            <a className="btn btn-primary" href="#projects">
              Смотреть проекты
            </a>
            <a className="btn btn-ghost" href="#contact">
              Связаться со мной
            </a>
          </div>

          <p className="hero-meta rise rise-5">AI • Vibe Coding • Digital Products</p>
        </div>

        <div className="hero-visual rise rise-3">
          <div className="portrait">
            <div className="portrait-placeholder">
              <img
                src={publicUrl(siteAssets.portrait)}
                alt="Валентина Отт"
                width={900}
                height={1350}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          <div className="float-chip chip-a" aria-hidden="true">
            AI Products
          </div>
          <div className="float-chip chip-b" aria-hidden="true">
            Vibe Coding
          </div>
          <div className="float-chip chip-c" aria-hidden="true">
            От идеи к релизу
          </div>
        </div>
      </div>
    </section>
  );
}
