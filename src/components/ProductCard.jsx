// src/components/ProductCard.jsx
import React from "react";
import { useInView } from "react-intersection-observer";

const ProductCard = ({ product, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Meningkatkan delay untuk efek staggered yang lebih jelas
  const animationDelay = `${index * 0.1}s`; // Delay 100ms per kartu

  return (
    <div
      ref={ref}
      className={`bg-cardbg rounded-lg overflow-hidden shadow-lg hover:shadow-xl
                 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
                 flex flex-col
                 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: inView ? animationDelay : "0s" }}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover object-top"
      />

      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-white text-lg font-semibold mb-1 truncate">
            {product.name}
          </h3>
          <p className="text-primary text-xl font-bold mb-3">{product.price}</p>
        </div>

        <a
          href={product.robloxLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-primary hover:bg-primaryDark text-white
                     font-bold py-2 px-4 rounded-md text-center
                     transition-colors mt-auto shadow-md hover:shadow-lg"
        >
          Beli Sekarang
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
