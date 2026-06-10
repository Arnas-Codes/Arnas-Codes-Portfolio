import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-(--bg) text-(--text) transition-colors duration-300">
      <Header />
      <Home />
      <Projects />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-10 md:py-14 lg:py-18">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8">
          <About />
          <TechStack />
        </div>
      </div>

      <Services />
      <Contact />
    </div>
  );
};

export default App;
