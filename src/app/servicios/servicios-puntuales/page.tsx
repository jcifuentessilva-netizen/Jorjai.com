"use client";

import Link from 'next/link';

export default function ServiciosPuntuales() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Catálogo de Servicios Puntuales
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Adquiere activos digitales de alto valor con una única inversión, sin suscripciones. Ideal para necesidades específicas y resultados rápidos.
        </p>
        <div className="mt-8">
          <Link href="/servicios" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            &larr; Volver a Servicios
          </Link>
        </div>
      </div>

      {/* Aquí podrías añadir más secciones con los servicios puntuales específicos */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Próximamente: Detalles de los Servicios</h2>
        <p className="text-lg text-gray-400">
          En esta sección podrás describir cada servicio puntual, sus beneficios, proceso y precios.
        </p>
      </div>
    </div>
  );
}