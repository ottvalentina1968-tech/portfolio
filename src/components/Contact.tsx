import { emailLinkProps, linkProps, siteLinks } from '../config';
import { useReveal } from '../hooks/useReveal';

function TelegramIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 2 11 13"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2 15 22l-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m4.2 7.4 7.1 5.1c.4.28.9.28 1.3 0l7.2-5.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section contact" id="contact">
      <div className="container contact-panel reveal" ref={ref}>
        <p className="section-kicker">Контакты</p>
        <h2 className="contact-title">
          Есть идея?
          <br />
          Давайте превратим
          <br />
          её в продукт.
        </h2>
        <p className="contact-text">
          Открыта к новым проектам, сотрудничеству и предложениям о работе.
        </p>
        <ul className="contact-list">
          <li>
            <a
              className="contact-link"
              aria-label="Telegram @OttVal"
              {...linkProps(siteLinks.telegram)}
            >
              <TelegramIcon />
              <span>@OttVal</span>
            </a>
          </li>
          <li>
            <a
              className="contact-link"
              aria-label={`Email ${siteLinks.emailExtra}`}
              {...emailLinkProps(siteLinks.emailExtra)}
            >
              <EmailIcon />
              <span>{siteLinks.emailExtra}</span>
            </a>
          </li>
          <li>
            <a
              className="contact-link"
              aria-label={`Email ${siteLinks.email}`}
              {...emailLinkProps(siteLinks.email)}
            >
              <EmailIcon />
              <span>{siteLinks.email}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
