import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className="w-full py-20 md:py-32 flex flex-col items-center justify-center animate-fadeIn"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 text-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
        Jorjai Digitalizaciones
      </h1>
      <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400 mb-4 text-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
        La Ruta Hacia tu Éxito Digital
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8 animate-slideUp" style={{ animationDelay: '0.6s' }}>
        Landing Pages, Sitios Web, E-Commerce, UX/UI Inmersivo y Automatización para PYMEs.
        <strong className="text-white"> Soluciones que venden.</strong>
      </p>
      <div className="flex justify-center gap-4 animate-slideUp" style={{ animationDelay: '0.8s' }}>
        <Link href="/servicios" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
          Ver Los Servicios
        </Link>
        <Link href="/proyectos" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
          Conoce Mi Trabajo
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;


