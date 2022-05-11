import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
      <>
      <Navbar />
     <Hero />
     <About />
    <Projects />
      </>
  );
}

export default App;
