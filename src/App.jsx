import { useState, useEffect } from 'react'
import './styles/App.css'
import './styles/Settings.css'
import Home from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Portfolio from './components/Portfolio'
import Parallax from './components/Parallax'
import AosInit from './components/AosInit';

function App() {

  const [activeItem, setActiveItem] = useState('Home');

  const handleMouseEnter = (itemName) => {
    setActiveItem(itemName);
    const section = document.getElementById(itemName);
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.part');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          setActiveItem(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AosInit />
      <nav>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png' />
        <ul>
          <li>
            <a className={activeItem === 'home' ? 'active' : ''} onClick={() => handleMouseEnter('home')} >Home</a>
          </li>
          <li>
            <a className={activeItem === 'about' ? 'active' : ''} onClick={() => handleMouseEnter('about')}>About</a>
          </li>
          <li>
            <a className={activeItem === 'skills' ? 'active' : ''} onClick={() => handleMouseEnter('skills')}>Skills</a>
          </li>
          <li>
            <a className={activeItem === 'projects' ? 'active' : ''} onClick={() => handleMouseEnter('projects')}>Projects</a>
          </li>
          <li>
            <a className={activeItem === 'portfolio' ? 'active' : ''} onClick={() => handleMouseEnter('portfolio')}>Portfolio</a>
          </li>
        </ul>
        <button>Contact me</button>
      </nav>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Portfolio />
    </>
  )
}

export default App;