// src/components/ImageModal.jsx
import React from "react";

const ImageModal = ({ isOpen, imageUrl, caption, onClose }) => {
  if (!isOpen) return null; // Jika modal tidak terbuka, jangan render apa-apa

  return (
    // Overlay modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
      onClick={onClose} // Menutup modal jika mengklik di luar gambar
    >
      {/* Konten Modal */}
      <div
        className="relative bg-transparent rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden" // Ubah bg-cardbg menjadi bg-transparent
        onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam modal menutupnya
      >
        {/* Tombol Tutup (X) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-3xl font-bold bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Gambar yang Diperbesar */}
        <img
          src={imageUrl}
          alt={caption} // alt tetap ada untuk aksesibilitas, meskipun caption tidak ditampilkan
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg" // object-contain agar gambar tidak terpotong
        />

        {/* Bagian caption dihilangkan sepenuhnya */}
      </div>
    </div>
  );
};

export default ImageModal;
