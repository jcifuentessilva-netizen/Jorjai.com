"use client";
import Link from 'next/link';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 bg-gray-950 shadow-lg">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="text-3xl font-extrabold text-blue-400 z-50">
            <Link href="/">Jorjai Digitalizaciones</Link>
          </div>
          <button
            className="md:hidden text-white focus:outline-none z-50" // Higher z-index for button
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>

          {/* Mobile Overlay (Backdrop) */}
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            ></div>
          )}

          {/* Mobile Menu (Slide-in) */}
          <ul
            className={`fixed top-0 right-0 h-full w-64 bg-gray-800 p-8 transform transition-transform duration-300 ease-in-out z-50 md:relative md:flex md:h-auto md:w-auto md:bg-transparent md:p-0 md:transform-none md:flex-row md:space-x-6
              ${menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} flex flex-col items-start pt-20 space-y-6 md:space-y-0`}
          >
            <li className="relative group p-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 my-2 md:my-0">
              <Link href="/sobre-mi" className="hover:text-blue-300 relative" onClick={() => setMenuOpen(false)}>
                Sobre Mí
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="relative group p-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 my-2 md:my-0">
              <Link href="/servicios" className="hover:text-blue-300 relative" onClick={() => setMenuOpen(false)}>
                Servicios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="relative group p-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 my-2 md:my-0">
              <Link href="/proyectos" className="hover:text-blue-300 relative" onClick={() => setMenuOpen(false)}>
                Proyectos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="relative group p-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 my-2 md:my-0">
              <Link href="/servicios#tools" className="hover:text-blue-300 relative" onClick={() => setMenuOpen(false)}>
                Costos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="relative group p-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 my-2 md:my-0">
              <Link href="/contacto" className="hover:text-blue-300 relative" onClick={() => setMenuOpen(false)}>
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="min-h-[calc(100vh-140px)]"> {/* Adjusted min-height for header/footer */}
        {children}
      </main>
      <footer className="text-center p-4 bg-gray-950 text-gray-400">
        <p>&copy; 2026 Jorjai Digitalizaciones. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;