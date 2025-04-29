import "./App.css";
import AboutSection from "./components/ui/AboutSection";
import Footer from "./components/ui/Footer";
import HeroSection from "./components/ui/HeroSection";
import Navbar from "./components/ui/Navbar";
import ProjectsSection from "./components/ui/ProjectsSection";
import ContactSection from "./components/ui/ContactSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
