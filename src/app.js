import React from 'react';
import Navbar from './components/navbarComponent';
import Headline from './components/headlineComponent';
import Works from './components/worksComponent';
import About from './components/aboutComponent';
import Contact from './components/contactComponent';
import './styles/app.css';

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <Navbar />
      {/* Headline */}
      <Headline />
      {/* Works */}
      <Works />
      {/* About Me */}
      <About />
      {/* Contact Me */}
      <Contact />
    </div>
  );
}

export default App;
