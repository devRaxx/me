import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
function App() {
  return (
    <div className="font-montserrat">
      <Hero />
      <Projects />
      <Work />
      <Skills />
      <Socials />
    </div>
  );
}

export default App;
