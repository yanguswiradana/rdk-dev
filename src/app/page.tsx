import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import Feature from "./components/Feature/page";
import ProductCard from "./components/Product/page";
import ProjectsSection from "./components/Project/page";
import TeamSection from "./components/Team/page";
import ContactSection from "./components/Contact/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <About />
        <Feature />
        <ProductCard />
        <ProjectsSection />
        <TeamSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
