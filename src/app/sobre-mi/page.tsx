"use client";

export default function SobreMi() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-white mb-6 text-center">Sobre Mí</h1>
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Soy Jordan Isaac, y mi misión es impulsar tu negocio en el mundo digital. Desde 2018, he estado inmerso en la creación de publicidad para redes sociales y desarrollando proyectos web profesionales. Acompaño a emprendedores y empresas establecidas en la creación de su identidad y contenido digital.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Mi trabajo se define por tres pilares fundamentales: <strong className="text-blue-400">Constancia, Medición y Mejora Continua.</strong>
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-3 mb-6">
          <li>
            <strong className="text-blue-400">Constancia:</strong> Porque el éxito digital no es un sprint, sino una maratón. Aseguro una presencia online sólida y activa.
          </li>
          <li>
            <strong className="text-blue-400">Medición:</strong> Porque lo que no se mide, no se puede mejorar. Te ofrezco datos claros para tomar decisiones estratégicas.
          </li>
          <li>
            <strong className="text-blue-400">Mejora Continua:</strong> Porque el entorno digital evoluciona constantemente. Adapto y optimizo tus estrategias para resultados crecientes.
          </li>
        </ul>
        <p className="text-lg text-gray-300 leading-relaxed">
          Esta filosofía me permite garantizar a mis clientes una evolución constante y resultados tangibles, diferenciándome por un enfoque estratégico y dinámico que realmente funciona.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Mis Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Diseño y Creatividad</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Logotipos e Identidad Visual</li>
              <li>Diseño de Flyers y Gráficos Estáticos</li>
              <li>Creación y Edición de Video (incluyendo con IA)</li>
              <li>Saludos y Contenido con IA</li>
              <li>Creación de Contenido Digital</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-3">Desarrollo y Tecnología</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Diseño y Desarrollo de Páginas Web</li>
              <li>Implementación de Chatbots</li>
              <li>Nociones de SaaS (Software as a Service)</li>
              <li>Automatización de Procesos Digitales</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Marketing y Estrategia</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Estrategias de Publicidad Digital (Premium y Básicas)</li>
              <li>Gestión de Redes Sociales</li>
              <li>Asesoramiento en Marketing</li>
              <li>Optimización SEO</li>
              <li>Estrategia Integral de Marca</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

