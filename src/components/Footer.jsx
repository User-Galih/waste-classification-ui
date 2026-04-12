import React from 'react';

const Footer = () => {
  return (
    // DIUBAH: Latar belakang hijau tua yang elegan menyesuaikan tema
    <footer className="bg-emerald-700 text-white py-12 border-t border-emerald-600">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <p className="text-2xl font-bold mb-2 tracking-wide">WasteClassifier</p>
          <p className="text-sm text-emerald-200">&copy; 2025. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#hero" className="text-emerald-100 hover:text-white hover:underline transition-all">Beranda</a>
          <a href="#showcase" className="text-emerald-100 hover:text-white hover:underline transition-all">Deteksi</a>
          <a href="#about" className="text-emerald-100 hover:text-white hover:underline transition-all">Tentang</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
