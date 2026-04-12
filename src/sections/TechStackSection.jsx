import React from 'react';

const TechStackSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo Bundar Minimalis - Warna Emerald Tegas */}
          <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mb-8 border-4 border-emerald-500 shadow-md animate-pulse">
            <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6">Tentang Waste Classifier</h2>
          
          <div className="max-w-4xl bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
            {/* Visi Proyek */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">Misi Kami: Teknologi untuk Bumi</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Waste CLassifier hadir bukan sekadar sebagai aplikasi, melainkan sebagai upaya nyata untuk meningkatkan literasi pengelolaan sampah di Indonesia. 
                Kami percaya bahwa pemilahan sampah yang tepat sejak dari sumbernya adalah kunci utama menuju sistem daur ulang yang efektif dan lingkungan yang berkelanjutan.
              </p>
            </div>

            {/* Edukasi Sampah yang Lebih Dalam */}
            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border-t-8 border-green-500">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-green-100 rounded-lg mr-3">🍃</div>
                  <span className="font-bold text-green-700 text-xl">Kategori Organik</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sampah yang berasal dari sisa makhluk hidup yang dapat terurai alami oleh mikroba. Jika dikelola dengan benar, sampah ini dapat diubah menjadi pupuk kompos yang menyuburkan tanah.
                  <br /><br />
                  <strong>Contoh:</strong> Sisa sayuran, buah-buahan, dedaunan, dan tulang ikan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border-t-8 border-amber-500">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-amber-100 rounded-lg mr-3">⚙️</div>
                  <span className="font-bold text-amber-700 text-xl">Kategori Anorganik</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sampah yang dihasilkan dari proses industri dan sulit terurai oleh alam dalam waktu singkat. Pemilahan yang benar memungkinkan sampah ini didaur ulang kembali (Recycle).
                  <br /><br />
                  <strong>Contoh:</strong> Botol plastik, kaleng aluminium, kaca, dan kemasan detergen.
                </p>
              </div>
            </div>

            {/* Penjelasan AI */}
            <div className="bg-emerald-600 text-white p-6 rounded-2xl mb-10 text-left">
              <h4 className="font-bold mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Didukung oleh Kecerdasan Buatan (AI)
              </h4>
              <p className="text-emerald-50 text-sm leading-relaxed">
                Sistem ini memanfaatkan arsitektur <strong>EfficientNetV2</strong>, salah satu model Deep Learning paling canggih saat ini, untuk mengenali pola visual sampah secara instan dan akurat melalui kamera perangkat Anda.
              </p>
            </div>

            {/* Identitas Pengembang */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-400 text-sm italic mb-1">Dirancang dan Dikembangkan oleh:</p>
              <p className="text-xl font-extrabold text-dark-slate tracking-tight">Galih Putra Pratama</p>
              <p className="text-emerald-600 text-sm font-semibold">Mahasiswa Teknik Informatika - Universitas Dian Nuswantoro</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
