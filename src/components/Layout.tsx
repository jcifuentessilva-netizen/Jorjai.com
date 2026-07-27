"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-lacquer text-champagne">
      <header className="fixed top-0 left-0 right-0 z-40 bg-lacquer/95 border-b border-gold-hairline">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold text-gradient">
            Jordan Digitalizaciones
          </Link>
          <button
            className="md:hidden text-white focus:outline-none relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          {menuOpen && (
            <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMenuOpen(false)} />
          )}
          <ul className={`fixed top-0 right-0 h-dvh w-72 bg-lacquer-raised px-6 pb-6 pt-20 transform transition-transform duration-300 z-50 md:relative md:flex md:h-auto md:w-auto md:bg-transparent md:p-0 md:transform-none md:items-center md:gap-1 ${menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} flex flex-col gap-1 overflow-y-auto`}>
            {[
              { href: "/sobre-mi", label: "Sobre Mí" },
              { href: "/servicios", label: "Servicios" },
              { href: "/proyectos", label: "Proyectos" },
              { href: "/contacto", label: "Contacto" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="md:hidden mt-3">
              <a
                href="https://wa.me/56930973700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white font-medium transition-all hover:bg-green-500"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="pt-16 min-h-screen pb-16">
        {children}
      </main>
      <footer className="border-t border-gold-hairline bg-lacquer">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Jordan Digitalizaciones. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/56930973700" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;