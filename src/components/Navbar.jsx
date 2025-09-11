import React, { useState, useEffect } from 'react';

// Jika Anda menggunakan file logo sendiri, aktifkan baris ini:
// import logoImage from '../assets/logo.png';

const Navbar = () => {
  // BARU: State untuk melacak posisi scroll
  const [hasScrolled, setHasScrolled] = useState(false);

  // BARU: useEffect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 10px, set state menjadi true
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Tambahkan event listener saat komponen dimuat
    window.addEventListener('scroll', handleScroll);

    // Hapus event listener saat komponen dilepas
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // DIUBAH: Navbar sekarang akan berubah warna saat di-scroll
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        hasScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2">
          {/* OPSI 1: Logo SVG langsung di kode (Rekomendasi jika tidak punya file) */}
          <svg 
            className={`h-8 w-8 transition-colors duration-300 ${hasScrolled ? 'text-primary' : 'text-white'}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2v-4zm0 6h2v2h-2v-2z" />
            <path d="M17.39 6.23C15.93 5.43 14.07 5 12 5c-3.31 0-6 2.69-6 6 0 1.01.25 1.94.68 2.77l8.71-8.71zM6.23 17.39C7.03 15.93 8.93 15 11 15c3.31 0 6-2.69 6-6 0-1.01-.25-1.94-.68-2.77L7.23 15.39z" fill-opacity="0.6"/>

          </svg>
          
          {/* OPSI 2: Jika menggunakan file gambar logo.png */}
          {/* <img src={logoImage} alt="WasteClassifier Logo" className="h-10" /> */}

          <span 
            className={`text-2xl font-bold transition-colors duration-300 ${
              hasScrolled ? 'text-dark-slate' : 'text-white'
            }`}
          >
            WasteClassifier
          </span>
        </a>
        
        {/* Menu Navigasi */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#hero" className={`font-semibold transition-colors duration-300 ${hasScrolled ? 'text-slate-700 hover:text-primary' : 'text-white hover:text-slate-200'}`}>Beranda</a></li>
          <li><a href="#showcase" className={`font-semibold transition-colors duration-300 ${hasScrolled ? 'text-slate-700 hover:text-primary' : 'text-white hover:text-slate-200'}`}>Deteksi</a></li>
          <li><a href="#about" className={`font-semibold transition-colors duration-300 ${hasScrolled ? 'text-slate-700 hover:text-primary' : 'text-white hover:text-slate-200'}`}>Tentang</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;