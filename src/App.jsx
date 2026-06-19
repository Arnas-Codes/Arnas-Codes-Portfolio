import Header from "./Components/Header Page/Header";
import BackgroundFX from "./Components/Small Sections/BackgroundFX";
import Home from "./Components/Home Page/Home";
import About from "./Components/About Page/About";
import TechStack from "./Components/Tech Page/TechStack";
import Projects from "./Components/Projects Page/Projects";
import Services from "./Components/Service Page/Services";
import Contact from "./Components/Contact";
const App = () => {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-(--bg) text-(--text) transition-colors duration-500 pb-10">
      {/* Background Effects */}
      <BackgroundFX />
      <Header />

      <main className="relative z-10">
        <Home />
        <Projects />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-10 md:py-14 lg:py-18">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <About />
            <TechStack />
          </div>
        </div>

        <Services />
        <Contact />
      </main>
    </div>
  );
};
export default App;
