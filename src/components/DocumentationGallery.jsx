// src/components/DocumentationGallery.jsx
import React from "react";
import { useInView } from "react-intersection-observer";

const DocumentationGallery = ({ photos, onImageClick }) => {
  return (
    <section className="bg-darkbg py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-white">
          Documentation Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });
            // Meningkatkan delay
            const animationDelay = `${index * 0.12}s`; // Delay 120ms per foto

            return (
              <div
                key={photo.id}
                ref={ref}
                className={`relative rounded-lg overflow-hidden shadow-lg group cursor-pointer
                           ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: inView ? animationDelay : "0s" }}
                onClick={() => onImageClick(photo)}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.caption}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DocumentationGallery;
