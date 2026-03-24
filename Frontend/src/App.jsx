import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-50 overflow-x-hidden relative">
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="relative" role="main">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
