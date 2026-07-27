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
      title: "SAM Conecta — Red de Rescate de Alimentos",
      description: "Plataforma comunitaria para conectar vecinos y rescatar alimentos con Next.js 16, Supabase y pagos integrados.",
      services: ["Next.js 16", "Supabase", "Pagos", "Mapas"],
      imageUrl: "",
      projectLink: "https://sam-conecta-web.vercel.app",
    },
    {
      title: "Snap2Code — Screenshot a Código con IA",
      description: "App que convierte capturas en código funcional usando la API de Gemini.",
      services: ["React + Vite", "Gemini API", "IA Generativa"],
      imageUrl: "",
      projectLink: "https://snap2code-screenshot-generate.vercel.app",
    },
    {
      title: "Super Alpha Market",
      description: "Plataforma para digitalizar PYMEs desde cero hasta marketplace propio.",
      services: ["Desarrollo", "E-commerce", "Branding"],
      imageUrl: "",
      projectLink: "",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center text-center px-4 bg-lacquer text-champagne">
      <HeroSection />

      <hr className="border-gold-hairline w-full max-w-6xl" />

      <section className="py-20 w-full max-w-6xl">
        <h2 className="text-4xl font-extrabold text-champagne mb-12 font-display">Servicios Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCategoryCard key={index} {...service} />
          ))}
        </div>
      </section>
      
      <hr className="border-gold-hairline w-full max-w-6xl" />

      <section className="py-20 w-full max-w-6xl">
        <h2 className="text-4xl font-extrabold text-champagne mb-12 font-display">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="mt-12">
            <Link href="/proyectos" className="text-kinpaku hover:text-kinpaku-pale text-lg font-semibold">
                Ver todos los proyectos &rarr;
            </Link>
        </div>
      </section>
    </main>
  );
}
