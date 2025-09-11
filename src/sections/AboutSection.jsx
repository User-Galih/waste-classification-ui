import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-white py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate">Kenapa Proyek Ini Penting?</h2>
            <p className="mt-4 text-slate-600">Memecahkan masalah nyata dengan teknologi cerdas.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-[fadeInUp_0.7s_ease-out]">
                {/* Ganti 'src' dengan link gambar yang relevan */}
                <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070" alt="Pengelolaan Sampah" className="rounded-xl shadow-2xl w-full" />
            </div>
            <div className="md:w-1/2 text-left animate-[fadeInUp_0.9s_ease-out]">
                <h3 className="text-2xl font-bold mb-3 text-primary-dark">Dari Masalah ke Solusi</h3>
                <p className="text-slate-600 mb-4">
                  Setiap tahun, Indonesia menghadapi tantangan besar dalam pengelolaan sampah.
                  Pemilahan yang tidak efisien menjadi kendala utama dalam proses daur ulang.
                </p>
                <p className="text-slate-600">
                  Waste Classifier hadir sebagai solusi cerdas, memanfaatkan model AI (EfficientNetV2)
                  untuk memberikan klasifikasi sampah instan dan akurat, membantu mempermudah langkah awal menuju daur ulang yang lebih efektif.
                </p>
            </div>
        </div>
      </div>
      {/* BARU: SVG Shape Divider untuk transisi yang mulus */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-brand-light-green"></path>
          </svg>
      </div>
    </section>
  );
};

export default AboutSection;