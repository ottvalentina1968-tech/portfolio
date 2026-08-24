import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    n: '01',
    title: 'Идея',
    text: 'Определяю задачу продукта и для кого он создаётся.',
  },
  {
    n: '02',
    title: 'Структура',
    text: 'Продумываю сценарии, функции и путь пользователя.',
  },
  {
    n: '03',
    title: 'Прототип',
    text: 'Собираю первый интерфейс и проверяю логику.',
  },
  {
    n: '04',
    title: 'Разработка с AI',
    text: 'Создаю и дорабатываю продукт с помощью AI-инструментов.',
  },
  {
    n: '05',
    title: 'Тестирование',
    text: 'Проверяю функции, исправляю ошибки и улучшаю интерфейс.',
  },
  {
    n: '06',
    title: 'Готовый продукт',
    text: 'Публикую проект и получаю рабочую ссылку.',
  },
] as const;

export function Process() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section process">
      <div className="container reveal" ref={ref}>
        <div className="section-heading">
          <p className="section-kicker">Как я работаю</p>
          <h2 className="section-title">От первого запроса до работающей ссылки.</h2>
        </div>

        <ol className="process-track">
          {steps.map((step, index) => (
            <li key={step.n}>
              <span className="process-num">{step.n}</span>
              <strong>{step.title}</strong>
              <span className="process-desc">{step.text}</span>
              {index < steps.length - 1 && <span className="process-line" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
