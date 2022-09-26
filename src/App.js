import './App.css';
import About from './components/About/About';
import Download from './components/Download/Download';
import { Certificates } from './components/Certificates/Certificates';
import { Header } from './components/Header/Header';
import {Hero} from './components/Hero/Hero';
import { Programs } from './components/Programs/Programs';
import { Testimonials } from './components/Testimonials/Testimonials';
import Scroll from './components/Scroll/Scroll';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Programs/>
      <Scroll/>
      <Download/>
      <Testimonials/>
      <Certificates/>
      <About/> 
    </div>
  );
}

export default App;