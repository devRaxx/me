import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
function App() {
  return (
    <div className="min-h-screen bg-[#020617] font-montserrat text-slate-100">
      <Hero />
      <Projects />
      <Work />
      <Skills />
      <Socials />
    </div>
  );
}

export default App;
