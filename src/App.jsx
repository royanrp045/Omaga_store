// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import DocumentationGallery from "./components/DocumentationGallery";
import ReviewCard from "./components/ReviewCard";
import ImageModal from "./components/ImageModal";

import products from "./data/products";
import reviews from "./data/reviews";
import documentationPhotos from "./data/documentationPhotos";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState({
    imageUrl: "",
    caption: "",
  });

  const openImageModal = (photo) => {
    setCurrentModalImage({ imageUrl: photo.imageUrl, caption: photo.caption });
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setCurrentModalImage({ imageUrl: "", caption: "" });
  };

  return (
    <div className="min-h-screen bg-darkbg text-white font-sans">
      <Header />
      <HeroSection />

      <main id="products-section" className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-extrabold mb-10 text-center md:text-left">
          Koleksi Terbaik Kami
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.map(
            (
              product,
              index // Tambahkan 'index'
            ) => (
              <ProductCard key={product.id} product={product} index={index} /> // Lewatkan 'index'
            )
          )}
        </div>
      </main>

      <DocumentationGallery
        photos={documentationPhotos}
        onImageClick={openImageModal}
      />

      <section className="bg-darkbg py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-white">
            Apa Kata Mereka?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map(
              (
                review,
                index // Tambahkan 'index'
              ) => (
                <ReviewCard key={review.id} review={review} index={index} /> // Lewatkan 'index'
              )
            )}
          </div>
        </div>
      </section>

      <footer className="bg-cardbg py-6 text-center text-gray-400 text-sm">
        <p>&copy; 2025 Omaga Store. All rights reserved.</p>
      </footer>

      <ImageModal
        isOpen={isModalOpen}
        imageUrl={currentModalImage.imageUrl}
        caption={currentModalImage.caption}
        onClose={closeImageModal}
      />
    </div>
  );
}

export default App;
