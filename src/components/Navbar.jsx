import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Efek Background Transparan ke Putih
      setHasScrolled(window.scrollY > 50);

      // 2. Logika Scroll Spy (Mendeteksi Seksi Aktif)
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
        <a href="#hero" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold transition-colors ${hasScrolled ? 'text-primary' : 'text-white'}`}>WasteClassifier</span>
        </a>
        
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
