import React from 'react';

const Footer = () => {
  return (
    // DIUBAH: Latar belakang gelap
    <footer className="bg-dark-slate text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <p className="text-2xl font-bold mb-2">WasteClassifier</p>
          <p className="text-sm text-slate-400">&copy; 2023. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#hero" className="text-slate-300 hover:text-primary transition-colors">Beranda</a>
          <a href="#showcase" className="text-slate-300 hover:text-primary transition-colors">Deteksi</a>
          <a href="#about" className="text-slate-300 hover:text-primary transition-colors">Tentang</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;