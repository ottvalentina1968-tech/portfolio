import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CookingProject } from './components/CookingProject';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function isCookingHash() {
  return window.location.hash === '#cooking';
}

function App() {
  const [cookingOpen, setCookingOpen] = useState(isCookingHash);

  useEffect(() => {
    const syncHash = () => setCookingOpen(isCookingHash());
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('cooking-open', cookingOpen);
    return () => document.body.classList.remove('cooking-open');
  }, [cookingOpen]);

  return (
    <>
      <div className="atmosphere" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="grid-fade" />
        <div className="noise" />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
      {cookingOpen && <CookingProject />}
    </>
  );
}

export default App;
