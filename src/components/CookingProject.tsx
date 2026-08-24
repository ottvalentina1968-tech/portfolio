import { linkProps, publicUrl, siteAssets, siteLinks } from '../config';
import { SafeImage } from './SafeImage';

const features = [
  'Поиск рецептов',
  'Категории блюд',
  'Избранное',
  'Удобный мобильный интерфейс',
] as const;

const techTags = ['Android', 'Kotlin', 'Mobile App', 'UX/UI'] as const;

export function CookingProject() {
  return (
    <section className="cooking-page" aria-labelledby="cooking-title">
      <div className="cooking-page-inner">
        <a className="btn btn-ghost cooking-back" href="#projects">
          Назад к проектам
        </a>

        <div className="cooking-layout">
          <div className="cooking-shot">
            <SafeImage
              src={publicUrl(siteAssets.cookingShot)}
              alt="Скриншот приложения «Что приготовить?»"
            />
          </div>

          <div className="cooking-copy">
            <p className="section-kicker">Проект</p>
            <h1 className="cooking-title" id="cooking-title">
              Что приготовить?
            </h1>
            <p className="project-role">Android-приложение</p>
            <p className="cooking-lead">
              Приложение для тех самых моментов, когда открываешь холодильник и думаешь:
              «Ну и что из этого приготовить?» Пользователь может искать рецепты,
              выбирать блюда по категориям и сохранять любимые варианты.
            </p>

            <h2 className="cooking-subtitle">Что умеет приложение</h2>
            <ul className="cooking-features">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <h2 className="cooking-subtitle">Технологии</h2>
            <ul className="tags">
              {techTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <a className="btn btn-primary" {...linkProps(siteLinks.cookingApk)}>
              Скачать APK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
