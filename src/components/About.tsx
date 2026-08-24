import { useReveal } from '../hooks/useReveal';

export function About() {
  const sectionRef = useReveal<HTMLDivElement>();

  return (
    <section className="section about" id="about">
      <div className="container about-grid reveal" ref={sectionRef}>
        <div>
          <p className="section-kicker">Обо мне</p>
          <h2 className="section-title">
            Не просто идея.
            <br />
            Работающий продукт.
          </h2>
        </div>

        <div className="about-copy">
          <p>
            Я создаю digital-проекты с помощью современных AI-инструментов и Vibe
            Coding. Мне нравится превращать идею в понятный и красивый продукт:
            продумывать структуру, интерфейс и пользовательскую логику, тестировать
            результат и доводить проект до публикации.
          </p>
          <p>
            Для меня AI — не замена человеку, а инструмент, который помогает быстрее
            воплощать идеи и находить новые решения.
          </p>
          <p className="about-note">
            Выпускница Школы Нейросетей и SMM Ксении Барановой. Применяю полученные
            знания на практике — от идеи и прототипа до готового работающего
            digital-продукта.
          </p>
        </div>
      </div>
    </section>
  );
}
