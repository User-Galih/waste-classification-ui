import React, { useState } from 'react';
import axios from 'axios';

const DetectorSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setResult(null); // Reset hasil sebelumnya
    }
  };

  const handleDetect = async () => {
    if (!selectedFile) {
      alert("Silakan pilih gambar terlebih dahulu.");
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("https://galihpp123-waste-classification-api.hf.space/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult({
        label: response.data.class_name,
        confidence: `${(response.data.confidence * 100).toFixed(2)}%`
      });
    } catch (error) {
      console.error("Error saat deteksi:", error);
      alert("Terjadi kesalahan saat mencoba menghubungi server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fadeInUp mt-8"> {/* Memberi sedikit jarak dari header tab */}
      {/* Area Drop/Pilih Gambar yang lebih menarik */}
      <div className="mb-6 border-2 border-dashed border-primary/50 bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300 rounded-xl p-4 sm:p-6 flex items-center justify-center min-h-[150px] relative">
        {preview ? (
          <div className="relative w-full h-full max-h-[300px]">
            <img src={preview} alt="Preview" className="w-full h-auto mx-auto rounded-lg object-contain max-h-[280px]"/>
            <button 
              onClick={() => { setSelectedFile(null); setPreview(null); setResult(null); }} 
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600 transition-colors"
              title="Hapus Gambar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mb-2 text-dark-slate font-semibold">Tarik & Lepas gambar di sini atau</p>
            <input type="file" id="file-input" onChange={handleFileChange} accept="image/*" className="hidden"/>
            <label htmlFor="file-input" className="cursor-pointer bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-md">
              Pilih File
            </label>
          </div>
        )}
      </div>
      
      {/* Tombol Deteksi */}
      <div className="flex justify-center mb-6">
        <button onClick={handleDetect} disabled={isLoading || !selectedFile} className="w-full sm:w-auto bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark disabled:bg-slate-400 transition-all duration-300 shadow-lg hover:shadow-primary/40 flex items-center justify-center">
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {isLoading ? "Menganalisis..." : "Deteksi"}
        </button>
      </div>
      {selectedFile && !preview && <p className="text-slate-500">File: {selectedFile.name}</p>} {/* Hanya tampilkan nama jika belum ada preview */}

      {/* Tampilan Kartu Hasil */}
      {result && (
        <div className="mt-8 p-6 bg-secondary rounded-xl border border-primary/30 text-left animate-fadeInUp">
          <h3 className="text-2xl font-bold mb-2 text-dark-slate">Hasil Deteksi</h3>
          <p className="text-xl">Jenis Sampah: <span className="font-bold text-primary-dark">{result.label}</span></p>
          <p className="text-lg">Tingkat Kepercayaan: <span className="font-semibold text-slate-700">{result.confidence}</span></p>
        </div>
      )}
    </div>
  );
};

export default DetectorSection;