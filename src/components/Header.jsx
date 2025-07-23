// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-cardbg p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          <span className="text-primary">Omaga</span> Store
        </h1>
      </div>
    </header>
  );
};

export default Header;
