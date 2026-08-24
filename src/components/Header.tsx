import { useEffect, useState } from 'react';

const navItems = [
  { href: '#about', label: 'Обо мне' },
  { href: '#projects', label: 'Проекты' },
  { href: '#skills', label: 'Навыки' },
  { href: '#contact', label: 'Контакты' },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            VO
          </span>
          <span className="brand-text">
            <strong>Валентина Отт</strong>
            <small>AI & Vibe Coding Developer</small>
          </span>
        </a>

        <nav className="nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Связаться
        </a>
      </div>
    </header>
  );
}
