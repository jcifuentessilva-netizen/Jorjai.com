"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const links = [
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-lacquer text-champagne">
      <header className="fixed top-0 left-0 right-0 z-40 bg-lacquer/95 border-b border-gold-hairline">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold text-gradient">
            Jordan Digitalizaciones
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block px-4 py-2 rounded-lg text-text-warm hover:text-champagne hover:bg-kinpaku/10 transition-all font-medium text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-white focus:outline-none p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* MOBILE OVERLAY */}
          {menuOpen && (
            <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMenuOpen(false)} />
          )}

          {/* MOBILE DRAWER */}
          <div className={`fixed top-0 right-0 h-dvh w-72 bg-lacquer-raised z-50 md:hidden transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col pt-20 pb-6 px-6 overflow-y-auto`}>
            <ul className="flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-text-warm hover:text-champagne hover:bg-kinpaku/10 transition-all font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t border-gold-hairline pt-4">
              <a
                href="https://wa.me/56930973700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-kinpaku text-lacquer-deep font-medium transition-all hover:opacity-90"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16 min-h-screen pb-16">
        {children}
      </main>

      <footer className="border-t border-gold-hairline bg-lacquer">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Jordan Digitalizaciones. Todos los derechos reservados.
          </p>
          <a href="https://wa.me/56930973700" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-kinpaku transition-colors">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
