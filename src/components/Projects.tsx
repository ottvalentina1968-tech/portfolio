import { linkProps, publicUrl, siteAssets, siteLinks } from '../config';
import { useReveal } from '../hooks/useReveal';
import { SafeImage } from './SafeImage';

const lumiTags = [
  'AI-помощник',
  'Умное планирование',
  'Календарь',
  'Задачи',
  'Финансы',
  'Личный ритм',
];
const recipeTags = ['Android', 'Мобильное приложение', 'Рецепты', 'UX/UI'];
const germanTags = ['HTML', 'CSS', 'JavaScript', 'UX/UI'];

export function Projects() {
  const introRef = useReveal<HTMLDivElement>();
  const featuredRef = useReveal<HTMLElement>();
  const gridRef = useReveal<HTMLDivElement>(40);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-heading reveal" ref={introRef}>
          <p className="section-kicker">Портфолио</p>
          <h2 className="section-title">Мои проекты</h2>
        </div>

        <article className="project-featured reveal" ref={featuredRef}>
          <div className="project-featured-copy">
            <p className="project-label">Главный проект</p>
            <h3>LUMI</h3>
            <p className="project-role">Персональный AI-помощник</p>
            <p className="project-text">
              LUMI помогает организовать задачи, встречи, платежи, домашние дела и
              личный ритм в одном пространстве. Помощник понимает запросы обычным
              языком, помогает составлять план дня и предлагает решения, оставляя
              окончательный контроль за пользователем.
            </p>
            <ul className="tags">
              {lumiTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a className="btn btn-primary" {...linkProps(siteLinks.projects.lumi)}>
              Открыть LUMI
            </a>
          </div>

          <div className="project-stage">
            <SafeImage
              src={publicUrl(siteAssets.lumiShot)}
              alt="Интерфейс LUMI"
            />
          </div>
        </article>

        <div className="project-grid reveal" ref={gridRef}>
          <article className="project-card cooking-card">
            <div className="project-shot phone-shot">
              <SafeImage
                src={publicUrl(siteAssets.cookingShot)}
                alt="Приложение «Что приготовить?»"
              />
            </div>
            <div className="project-card-body">
              <h3>Что приготовить?</h3>
              <p className="project-role">Android-приложение</p>
              <p className="project-text">
                Приложение для тех самых моментов, когда открываешь холодильник и
                думаешь: «Ну и что из этого приготовить?» Пользователь может искать
                рецепты, выбирать блюда по категориям и сохранять любимые варианты.
              </p>
              <ul className="tags">
                {recipeTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a className="btn btn-ghost" href="#cooking">
                Посмотреть проект
              </a>
            </div>
          </article>

          <article className="project-card german-card">
            <div className="project-card-body">
              <h3>Простой немецкий</h3>
              <p className="project-role">Веб-проект для изучения языка</p>
              <p className="project-text">
                Веб-проект для изучения немецкого языка уровня B1–B2. Помогает разобраться
                в грамматике, понять логику языка, практиковаться и диагностировать
                знания — в одном понятном пространстве.
              </p>
              <ul className="tags">
                {germanTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a className="btn btn-ghost" {...linkProps(siteLinks.projects.german)}>
                Посмотреть проект
              </a>
            </div>
            <div className="project-shot german-shot">
              <SafeImage
                src={publicUrl(siteAssets.germanShot)}
                alt="Проект «Простой немецкий»"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
