import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-10 border-t border-emerald-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Bagian Kiri: Identitas Singkat */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight">Waste<span className="text-emerald-400">Classifier</span></h2>
            <p className="text-xs text-emerald-300/80 mt-1 max-w-xs">
              Solusi cerdas klasifikasi sampah berbasis Deep Learning untuk masa depan yang lebih hijau.
            </p>
          </div>

          {/* Bagian Tengah: Link Navigasi Cepat */}
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#hero" className="text-emerald-200 hover:text-white transition-colors">Beranda</a>
            <a href="#showcase" className="text-emerald-200 hover:text-white transition-colors">Deteksi</a>
            <a href="#about" className="text-emerald-200 hover:text-white transition-colors">Tentang</a>
          </div>

          {/* Bagian Kanan: Sosial Media / Icon */}
          <div className="flex space-x-4">
            {/* Icon GitHub */}
            <a href="#" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-700 transition-all" aria-label="GitHub Profile">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            
            {/* Icon Kaggle (DIUBAH DARI TWITTER) */}
            <a href="#" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-700 transition-all flex items-center justify-center" aria-label="Kaggle Profile">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.246l-5.108-7.57-2.671 2.742v4.652c0 .117-.035.211-.105.281-.07.07-.164.105-.281.105H4.277c-.117 0-.211-.035-.281-.105-.07-.07-.105-.164-.105-.281V.422c0-.117.035-.211.105-.281.07-.07.164-.105.281-.105h2.472c.117 0 .211.035.281.105.07.07.105.164.105.281v14.939l7.077-7.358c.141-.164.305-.246.492-.246h3.139c.164 0 .258.047.281.141.023.094-.023.188-.141.281l-5.553 5.764 5.928 8.788c.117.141.141.258.07.352z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="mt-10 pt-6 border-t border-emerald-800/50 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/60 font-medium">
            &copy; 2025 Waste Classifier Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
