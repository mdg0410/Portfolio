import React from 'react';
import Navbar from './components/navbar';
import Headline from './components/headline';
import Works from './components/works';
import About from './components/about';
import Contact from './components/contact';
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
