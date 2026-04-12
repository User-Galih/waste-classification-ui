import React from 'react';

const TechStackSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo Bundar Minimalis */}
          <div className="w-32 h-32 bg-brand-green/10 rounded-full flex items-center justify-center mb-8 border-2 border-brand-green animate-pulse">
            <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6">Tentang Kami</h2>
          
          <div className="max-w-3xl bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-green mb-4">Mengapa Klasifikasi Sampah Itu Penting?</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Klasifikasi sampah adalah langkah awal yang paling krusial dalam menjaga kelestarian lingkungan. 
              Secara garis besar, sampah dibagi menjadi dua kategori utama:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
              <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-green-500">
                <span className="font-bold text-green-600 block mb-1">Sampah Organik</span>
                <p className="text-sm text-slate-500">
                  Sampah yang berasal dari sisa makhluk hidup yang mudah terurai secara alami, seperti sisa makanan, daun kering, dan kulit buah.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-amber-500">
                <span className="font-bold text-amber-600 block mb-1">Sampah Anorganik</span>
                <p className="text-sm text-slate-500">
                  Sampah yang dihasilkan dari proses teknologi dan sulit terurai, seperti plastik, logam, kaca, dan kertas. Pemilahan yang benar membantu proses daur ulang menjadi lebih efektif.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <p className="text-slate-400 text-sm italic mb-2">Dikembangkan oleh:</p>
              <p className="text-lg font-bold text-dark-slate">Galih Putra Pratama</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
