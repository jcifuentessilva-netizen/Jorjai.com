import Link from 'next/link';
import ServiceCategoryCard from '@/components/ServiceCategoryCard';
import ProjectCard from '@/components/ProjectCard';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const featuredServices = [
    {
      title: "Packs de Emprendimiento",
      description: "Soluciones de suscripción y pago único para lanzar y hacer crecer tu negocio digital.",
      link: "/servicios/starter-packs",
      buttonText: "Ver Packs",
    },
    {
      title: "Sitio Web Escalable",
      description: "Construcción y mantenimiento de sitios web completos, con múltiples secciones y gestor de contenido.",
      link: "/servicios/sitio-web-escalable",
      buttonText: "Ver Planes",
    },
    {
      title: "E-Commerce y RRSS",
      description: "Tiendas online profesionales y gestión estratégica de redes sociales para aumentar ventas.",
      link: "/servicios",
      buttonText: "Ver Opciones",
    },
  ];

  const featuredProjects = [
    {
      title: "Jorjai Digitalizaciones (Plataforma Propia)",
      description: "Ecosistema digital completo para ayudar a emprendedores y PYMEs a digitalizarse y vender en internet.",
      services: ["Desarrollo de Plataformas", "E-commerce", "Branding"],
      imageUrl: "https://via.placeholder.com/400x250?text=Super+Alpha+Market",
      projectLink: "/proyectos",
    },
    {
      title: "Colaborador en Agencia Merlin MKT",
      description: "Apliqué un enfoque integral, contribuyendo desde el desarrollo web y campañas publicitarias, hasta la creación de flyers y la mejora de procesos.",
      services: ["Desarrollo Web", "Publicidad Digital", "Diseño Gráfico"],
      imageUrl: "https://via.placeholder.com/400x250?text=Merlin+MKT",
      projectLink: "/proyectos",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center text-center px-4 bg-gray-900 text-white">
      <HeroSection />

      <hr className="border-gray-700 w-full max-w-6xl" />

      {/* Featured Services Section */}
      <section className="py-20 w-full max-w-6xl">
        <h2 className="text-4xl font-extrabold text-white mb-12">Servicios Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCategoryCard key={index} {...service} />
          ))}
        </div>
      </section>
      
      <hr className="border-gray-700 w-full max-w-6xl" />

      {/* Featured Projects Section */}
      <section className="py-20 w-full max-w-6xl">
        <h2 className="text-4xl font-extrabold text-white mb-12">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="mt-12">
            <Link href="/proyectos" className="text-blue-400 hover:text-blue-300 text-lg font-semibold">
                Ver todos los proyectos &rarr;
            </Link>
        </div>
      </section>
    </main>
  );
}
