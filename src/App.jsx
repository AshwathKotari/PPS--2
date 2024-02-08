// App.js
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Softskills } from './components/Softskills';
import { Techstack } from './components/Techstack';
import { ProjectList } from './components/ProjectList';
import { Contact } from './components/Contact';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import DisableZoom from './components/DisableZoom';

function App() {
  return (
    <div className="body">
      <DisableZoom />
      <header>
        <Header/>
      </header>
      <div className='container'>
       <Navbar/>
          
          <main className='routes'>
        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Softskills" element={<Softskills />} />
              <Route path="/Techstack" element={<Techstack />} />
              <Route path="/ProjectList" element={<ProjectList />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>
        </div>  
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
