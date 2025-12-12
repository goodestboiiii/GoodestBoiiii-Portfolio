import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar.jsx';
import Home from './Pages/Home.jsx';
import Skills from './Pages/Skills.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';
import Kilowhatt from './Pages/Kilowhatt.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />

      
        <Route path="/kilowhatt" element={<Kilowhatt />} />
        <Route path="/Projects" element={
            <>
              <NavBar />
              <Home />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
      </Routes>
    </Router>
  );
}

export default App;
