/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Menggunakan font Inter
      },
      colors: {
        // Palet warna yang lebih terdefinisi
        primary: "#EF4444", // Merah cerah untuk aksi utama
        primaryDark: "#B91C1C", // Merah lebih gelap untuk hover state
        darkbg: "#111827", // Latar belakang sangat gelap (gray-900)
        cardbg: "#1F2937", // Latar belakang kartu (gray-800)
      },
      // --- Tambahkan bagian ini untuk animasi kustom ---
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      // --- Akhir bagian animasi kustom ---
    },
  },
  plugins: [],
};
