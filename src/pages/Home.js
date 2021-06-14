import React from 'react';
import NavMenu from '../components/NavMenu';
import Menu from '../components/Menu';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experiences from '../components/Experiences';
import Formation from '../components/Formation';
import Contact from '../components/Contact';
import Script from '../components/script.js';
import MenuScript from '../components/menuScript.js';

const Home = () => {
    
    return (<>
        <NavMenu />
        <header id="home">
            <svg viewBox="0 0 1350 400">
                <text x="50%" y="50%" fill="transparent" textAnchor="middle" className="sans-serif">
                    Christopher Debray
                </text>
            </svg>
            <p className="line anim-typewriter">Développeur web</p>
        </header>
        <main>
            <Menu />
            <About />
            <Skills />
            <Projects />
            <Experiences />
            <Formation />
            <Contact />
        </main>
        <script src={Script}></script>
        <script src={MenuScript}></script>
        </>
    );
}

export default Home;