// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-96 bg-cover bg-center rounded-b-xl shadow-xl animate-fade-in"
      style={{
        backgroundImage: "url('/images/1.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-darkbg via-transparent to-transparent opacity-90 rounded-b-xl"></div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          The best Roblox outfits collection
        </h2>
        <p className="text-base sm:text-lg mb-6 text-gray-200 drop-shadow">
          Discover the best outfits for your Roblox avatar right here!
        </p>

        <a
          href="https://www.roblox.com/catalog?Category=1&CreatorName=Erpee37&salesTypeFilter=1" // Add your desired link here
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice
          className="bg-primary hover:bg-primaryDark text-white font-bold py-3 px-8 rounded-md text-lg transition-colors self-start shadow-lg hover:shadow-xl"
        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
