import React, { useState, useEffect } from 'react';

// Impor gambar dari folder lokal
import heroImage1 from '../assets/lampu.jpg';
import heroImage2 from '../assets/turbin.jpg';
import heroImage3 from '../assets/botol.jpg';

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
];

const HeroSection = () => {
  // BARU: State untuk melacak slide yang sedang aktif
  const [currentSlide, setCurrentSlide] = useState(0);

  // BARU: useEffect untuk membuat loop slideshow otomatis
  useEffect(() => {
    // Set interval untuk mengganti slide setiap 5 detik (5000 milidetik)
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % heroImages.length);
    }, 5000); // <-- UBAH ANGKA INI UNTUK MENGATUR KECEPATAN (misal: 3000 untuk 3 detik)

    // Cleanup function untuk memberhentikan interval saat komponen tidak lagi ditampilkan
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section id="hero" className="relative text-white text-center overflow-hidden h-[600px] md:h-[700px] flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* DIUBAH: Menggunakan transform dari state, bukan animasi CSS */}
        <div 
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ 
            width: `${heroImages.length * 100}%`, // Lebar total sesuai jumlah gambar
            transform: `translateX(-${(100 / heroImages.length) * currentSlide}%)` 
          }}
        >
          {heroImages.map((img, index) => (
            <div 
              key={index} 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/70 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight animate-[fadeInUp_0.5s_ease-out] [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
          Klasifikasi Sampah Cerdas
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8 animate-[fadeInUp_0.7s_ease-out] [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
          Manfaatkan kekuatan Deep Learning untuk mengidentifikasi sampah organik dan anorganik secara instan.
        </p>
        <div className="animate-[fadeInUp_0.9s_ease-out]">
          <a 
            href="#showcase"
            className="bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Mulai Deteksi
          </a>
        </div>
      </div>
      
      {/* DIHAPUS: SVG Shape Divider sudah dihapus dari sini */}
    </section>
  );
};

export default HeroSection;