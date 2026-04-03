import React from 'react';

// BARU: Tambahkan logo SVG (atau path ke gambar PNG/JPG) di sini
// Jika tidak ada, Anda bisa tetap menggunakan inisial teks
const technologies = [
  { name: 'React', description: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', description: 'Styling', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Python', description: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'FastAPI', description: 'API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'TensorFlow', description: 'Deep Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Keras', description: 'High-Level API', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/langid-198px-Keras_logo.svg.png' },
  { name: 'Vite', description: 'Build Tool', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  // Tambahkan lagi jika ingin lebih banyak item untuk di-scroll
];

const TechStackSection = () => {
  // Menduplikasi array untuk efek infinite scroll
  const doubledTechnologies = [...technologies, ...technologies];

  return (
    <section id="tech" className="py-20 md:py-24 bg-brand-light-green relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-slate">Teknologi yang Kami Gunakan</h2>
        <p className="mb-12 text-slate-600 max-w-2xl mx-auto">Dibangun dengan alat-alat terbaik di industri.</p>
      </div>

      {/* BARU: Container untuk efek Marquee (scrolling otomatis) */}
      <div className="relative w-full overflow-hidden whitespace-nowrap py-4">
        <div className="inline-block animate-marquee group-hover:pause"> {/* Animasi marquee */}
          {doubledTechnologies.map((tech, index) => (
            <div key={index} className="inline-block mx-8 p-4 bg-white rounded-3xl shadow-md w-48 text-center border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {tech.logo ? (
                <img src={tech.logo} alt={tech.name} className="h-16 w-16 mx-auto mb-4 object-contain"/>
              ) : (
                <div className="h-16 w-16 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-slate-500 text-2xl">
                  {tech.name.substring(0, 2)}
                </div>
              )}
              <h3 className="font-bold text-lg text-dark-slate">{tech.name}</h3>
              <p className="text-sm text-slate-500">{tech.description}</p>
            </div>
          ))}
          {/* Untuk memastikan loop mulus, tambahkan duplikasi kedua */}
          {doubledTechnologies.map((tech, index) => (
            <div key={`second-${index}`} className="inline-block mx-8 p-4 bg-white rounded-3xl shadow-md w-48 text-center border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {tech.logo ? (
                <img src={tech.logo} alt={tech.name} className="h-16 w-16 mx-auto mb-4 object-contain"/>
              ) : (
                <div className="h-16 w-16 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-slate-500 text-2xl">
                  {tech.name.substring(0, 2)}
                </div>
              )}
              <h3 className="font-bold text-lg text-dark-slate">{tech.name}</h3>
              <p className="text-sm text-slate-500">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* SVG Shape Divider di bawah Tech Stack Section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[100px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-dark-slate"></path> {/* Warna disesuaikan */}
          </svg>
      </div>
    </section>
  );
};

export default TechStackSection;
