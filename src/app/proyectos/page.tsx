"use client";
import ProjectCard from '@/components/ProjectCard';

export default function Proyectos() {
  const projects = [
    {
      title: "Colaborador Digital Integral en Agencia Merlin MKT (2025)",
      description: "Durante mi colaboración con la agencia Merlin MKT en 2025, apliqué un enfoque integral, contribuyendo desde el desarrollo de sitios web y la ejecución de campañas publicitarias, hasta la creación de flyers, asesoramiento en producción de video y la mejora de la organización interna. Esta experiencia me permitió fortalecer mi visión 360° del marketing digital y entregar soluciones completas a los clientes, demostrando versatilidad y eficiencia en cada área.",
      services: ["Desarrollo Web", "Publicidad Digital", "Diseño Gráfico", "Asesoramiento en Video", "Optimización de Procesos", "Estrategia Integral"],
      imageUrl: "https://via.placeholder.com/400x250?text=Merlin+MKT+Project", // Placeholder image
      projectLink: "#", // No URL provided, so a placeholder link
    },
    {
      title: '"identidadycontenido" (Instagram)',
      description: "Mi plataforma personal donde exploro y comparto las mejores prácticas en creación de identidad y contenido digital. Es un laboratorio de ideas y un escaparate de la aplicación de Constancia, Medición y Mejora Continua en estrategias de marca y comunicación.",
      services: ["Creación de Contenido", "Estrategia de Marca Personal", "Gestión de Redes Sociales", "Comunicación Digital"],
      imageUrl: "https://via.placeholder.com/400x250?text=Identidadycontenido", // Placeholder image
      projectLink: "https://www.instagram.com/identidadycontenido", // Example Instagram link, please provide the actual one if different
    },
    {
      title: "Super Alpha Market (Proyecto Propio / Actual)",
      description: "Mi proyecto personal más ambicioso, Super Alpha Market, es una plataforma dedicada a ayudar a emprendedores y negocios consolidados (+10 años de experiencia) a digitalizarse desde cero para vender en internet. Abarca desde la creación de una identidad de negocio hasta la integración en nuestro propio marketplace, ofreciendo una solución completa para el éxito digital.",
      services: ["Desarrollo de Plataformas", "E-commerce", "Estrategia Digital", "Branding", "Consultoría de Negocios"],
      imageUrl: "https://via.placeholder.com/400x250?text=Super+Alpha+Market", // Placeholder image
      projectLink: "#", // No URL provided, so a placeholder link
    },
    // Add more projects here as needed
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center">Mis Proyectos</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}