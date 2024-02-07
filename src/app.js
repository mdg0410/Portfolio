import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/navbarComponent';
import Headline from './components/headlineComponent';
import Works from './components/worksComponent';
import About from './components/aboutComponent';
import Contact from './components/contactComponent';
import './styles/app.css';
import { selectModal } from './redux/slices/modalSlice';

function App() {
  const isOpenModal = useSelector(selectModal);
  console.log(isOpenModal);
  return (
    <div className="containerPortfolio">
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
