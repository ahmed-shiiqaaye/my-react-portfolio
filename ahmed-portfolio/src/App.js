import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer';
function App() {
  return (
      <>
      <Navbar />
     <Hero />
     <About />
    <Projects />
    <Skills />
    <Footer />

      </>
  );
}

export default App;
