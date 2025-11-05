import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import HeroSection from "./components/HeroSection.jsx";
import ServicesGrid from "./components/ServicesGrid.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Vision";
import Digital from "./components/Digital.jsx";

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="relative min-h-screen font-sans bg-gray-900">
      <Navbar />
      <AnimatedSection>
        <HomePage />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesGrid />
      </AnimatedSection>

      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <Digital/>
      </AnimatedSection>

      <AnimatedSection>
        <Services />
      </AnimatedSection>

      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}

export default App;
