import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useColorMode } from 'theme-ui';
import { alpha } from '@theme-ui/color';
/** @jsxImportSource theme-ui */
import "./App.css"
import "./styleSheets/darkToggle.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [colorMode, setColorMode] = useColorMode();
  const [slide, setSlide] = useState(false);


  const slideClass = () => {
    setSlide(!slide)
}
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <div className='homeNav'  sx={{
    backgroundImage: (t) => `
      linear-gradient(
        to bottom,
        ${alpha('navPrimary', 0.9)(t)},
        ${alpha('navSecondary', 0.1)(t)}
      )
    `,
  }}>
        <button className={slide ? 'slide' : null} sx={{ bg: 'black', color: 'white' }} id="slide" onClick={() => { setColorMode(colorMode === 'light' ? 'dark' : 'light'); slideClass() }}>
                            <div className="indicator"></div>
                        </button>
          <nav className='navBar' >
          
            <Link to="/" className='link' sx={{color: 'nav'}}>Home</Link>
            <Link to="/about" className='link' sx={{color: 'nav'}}>About</Link>
            <Link to="/contact" className='link' sx={{color: 'nav'}}>Contact</Link>
          </nav >
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
