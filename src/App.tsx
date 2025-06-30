import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidePanel from './components/SidePanel';
import Home from './pages/Home';
import About from './pages/About';
import Equcation from './pages/Equcation';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="flex h-screen w-screen overflow-hidden">
        {/* Sidebar */}
        <div className="w-[20%] bg-[#0f172a]">
          <SidePanel />
        </div>

        {/* Main content */}
        <main className="w-[80%] overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/equcation" element={<Equcation />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
