import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const RealtimeDetector = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const intervalId = useRef(null);
    
    const [result, setResult] = useState(null);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [error, setError] = useState(null);

    const startCamera = async () => {
        setError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { width: 640, height: 480, facingMode: 'environment' } 
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setIsCameraOn(true);
                intervalId.current = setInterval(captureAndPredict, 1000); 
            }
        } catch (err) {
            console.error("Error accessing webcam:", err);
            setError("Tidak bisa mengakses webcam. Pastikan Anda memberikan izin dan tidak ada aplikasi lain yang sedang menggunakannya.");
        }
    };

    const stopCamera = () => {
        clearInterval(intervalId.current);
        intervalId.current = null;

        if (videoRef.current && videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        }
        
        setIsCameraOn(false);
        setResult(null);
    };

    const captureAndPredict = () => {
        if (!videoRef.current || !canvasRef.current || videoRef.current.paused || videoRef.current.ended) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

        canvas.toBlob(async (blob) => {
            const formData = new FormData();
            formData.append('image', blob, 'webcam-frame.jpg');
            try {
                // DIUBAH: Menggunakan URL Hugging Face yang sudah live
                const response = await axios.post("https://galihpp123-waste-classification-api.hf.space/predict", formData);
                
                setResult({
                    label: response.data.class_name,
                    confidence: `${(response.data.confidence * 100).toFixed(1)}%`
                });
            } catch (error) {
                console.error("Prediction error:", error);
            }
        }, 'image/jpeg');
    };

    useEffect(() => {
        return () => {
            stopCamera(); 
        };
    }, []);

    return (
        <div className="animate-fadeInUp mt-8">
            <div className="max-w-2xl mx-auto bg-slate-900 p-4 rounded-xl shadow-inner relative border-4 border-slate-700">
                <video ref={videoRef} autoPlay playsInline muted className="w-full h-auto rounded-lg"></video>
                
                {result && isCameraOn && (
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white p-4 rounded-lg z-20">
                    <p className="text-3xl font-bold text-primary">{result.label}</p>
                    <p className="text-xl">{result.confidence}</p>
                    </div>
                )}

                {!isCameraOn && (
                    <div className='flex flex-col items-center justify-center h-80 text-white'>
                        <p className='mb-4 text-slate-300'>Kamera tidak aktif. Klik untuk memulai.</p>
                    </div>
                )}
            </div>
            
            {error && <p className="text-red-500 mt-4">{error}</p>}
            
            <div className="mt-8 flex justify-center">
                {!isCameraOn ? (
                    <button onClick={startCamera} className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/40">
                        Nyalakan Kamera
                    </button>
                ) : (
                    <button onClick={stopCamera} className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/40">
                        Matikan Kamera
                    </button>
                )}
            </div>

            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
};

export default RealtimeDetector;