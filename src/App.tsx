import Hero from './components/Hero';
import NavBar from './components/NavBar';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cocktails from './components/Cocktails';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <NavBar />
      <Hero />
      <Cocktails />
    </div>
  );
}
