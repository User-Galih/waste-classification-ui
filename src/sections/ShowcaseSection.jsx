import React, { useState } from 'react';
import DetectorSection from './DetectorSection';
import RealtimeDetector from './RealtimeDetector';

const ShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState('file'); // 'file' or 'realtime'

  const tabStyles = "py-4 px-6 font-bold text-lg rounded-t-lg cursor-pointer transition-all duration-300";
  const activeTabStyles = "bg-white text-primary shadow-lg";
  const inactiveTabStyles = "bg-brand-light-green text-slate-500 hover:bg-brand-green"; // BARU

  return (
    <section id="showcase" className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-white to-brand-green"> {/* BARU: Gradien background */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-slate">
          Coba Langsung Aplikasinya
        </h2>
        <p className="mb-12 text-slate-600 max-w-2xl mx-auto">
          Pilih metode deteksi yang Anda inginkan di bawah ini.
        </p>

        {/* Navigasi Tab */}
        <div className="flex justify-center border-b-2 border-slate-200 bg-white/50 backdrop-blur-sm rounded-t-lg shadow-inner"> {/* BARU: Background pada tab nav */}
          <button 
            onClick={() => setActiveTab('file')}
            className={`${tabStyles} ${activeTab === 'file' ? activeTabStyles : inactiveTabStyles}`}
          >
            Deteksi File
          </button>
          <button 
            onClick={() => setActiveTab('realtime')}
            className={`${tabStyles} ${activeTab === 'realtime' ? activeTabStyles : inactiveTabStyles}`}
          >
            Deteksi Real-time
          </button>
        </div>

        {/* Konten Tab */}
        {/* BARU: Shadow yang lebih kuat pada konten */}
        <div className="bg-white p-6 sm:p-10 rounded-b-2xl rounded-tr-2xl shadow-2xl border border-slate-200">
          {activeTab === 'file' && <DetectorSection />}
          {activeTab === 'realtime' && <RealtimeDetector />}
        </div>
      </div>
      {/* BARU: SVG Shape Divider di bawah Showcase Section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[100px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-brand-green"></path> {/* Warna disesuaikan */}
          </svg>
      </div>
    </section>
  );
};

export default ShowcaseSection;
