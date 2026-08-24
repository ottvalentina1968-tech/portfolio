import { useReveal } from '../hooks/useReveal';

const skills = [
  'Разработка с помощью AI',
  'Vibe Coding',
  'Cursor',
  'Создание сайтов',
  'Разработка интерфейсов',
  'Прототипирование',
  'Логика приложений',
  'HTML / CSS / JavaScript',
  'React / TypeScript',
  'Git / GitHub',
  'Android-проекты',
  'Тестирование',
  'Публикация проектов',
] as const;

export function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section skills" id="skills">
      <div className="container reveal" ref={ref}>
        <div className="section-heading">
          <p className="section-kicker">Навыки</p>
          <h2 className="section-title">Стек, с которым я собираю продукты</h2>
          <p className="section-lead">
            Практические инструменты и навыки для пути от идеи до опубликованного
            проекта — без завышенных обещаний, с акцентом на результат.
          </p>
        </div>

        <ul className="skills-grid">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
