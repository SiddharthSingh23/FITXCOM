import './App.css';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';
import {Hero} from './components/Hero/Hero';
import { Programs } from './components/Programs/Programs';
import { Testimonials } from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Programs/>
      <About/>
      <Testimonials/>
    </div>
  );
}

export default App;