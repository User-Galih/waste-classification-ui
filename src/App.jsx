import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ShowcaseSection from './sections/ShowcaseSection'; // <-- PENTING: Import ShowcaseSection
import AboutSection from './sections/AboutSection';
import TechStackSection from './sections/TechStackSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 text-gray-800"> {/* Default background untuk body */}
      <Navbar />
      <main>
        <HeroSection />
        <ShowcaseSection /> {/* <-- PENTING: Gunakan ShowcaseSection */}
        <AboutSection />
        <TechStackSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;