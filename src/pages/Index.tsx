import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import About from "@/component/About";
import MenuHighlights from "@/component/MenuHighlights";
import Gallery from "@/component/Gallery";
import Testimonials from "@/component/Testimonials";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

