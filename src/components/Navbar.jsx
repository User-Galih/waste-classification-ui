import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Deteksi gulir untuk efek background navbar
      setHasScrolled(window.scrollY > 50);

      // Logika Scroll Spy untuk mendeteksi seksi yang aktif di layar
      const sections = ['hero', 'showcase', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', id: 'hero' },
    { name: 'Deteksi', id: 'showcase' },
    { name: 'Tentang', id: 'about' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${hasScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo dengan Ikon Daun Minimalis */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <svg className={`w-10 h-10 transition-colors duration-300 ${hasScrolled ? 'text-primary' : 'text-white'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8h-5a7 7 0 0 1-5 10Z" />
            <path d="M3 21.5V17" />
            <path d="M3 13c0-4.42 3.58-8 8-8" />
          </svg>
          <span className={`text-2xl font-bold transition-colors duration-300 ${hasScrolled ? 'text-primary' : 'text-white'}`}>WasteClassifier</span>
        </a>
        
        {/* Navigasi Desktop */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                className={`font-semibold transition-all duration-300 ${
                  activeSection === link.id 
                  ? 'text-primary border-b-2 border-primary' 
                  : (hasScrolled ? 'text-slate-600 hover:text-primary' : 'text-white/80 hover:text-white')
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
