"use client";
import ProjectCard from '@/components/ProjectCard';

export default function Proyectos() {
  const projects = [
    {
      title: "AxisPanel — Panel de Administración",
      description: "Panel de administración moderno con Svelte 5 y Node.js. Gestión de usuarios, roles, reportes y métricas en tiempo real. Corre en localhost:3030.",
      services: ["Svelte 5", "Node.js", "Tiempo Real", "Panel Admin"],
      imageUrl: "",
      projectLink: "",
    },
    {
      title: "SAM Conecta — Red de Rescate de Alimentos",
      description: "Plataforma comunitaria para conectar vecinos y rescatar alimentos, construyendo una economía circular local. Next.js 16, Supabase, pagos Mercado Pago/Stripe, mapas Leaflet y autenticación completa.",
      services: ["Next.js 16", "Supabase", "Pagos Online", "Mapas", "Framer Motion"],
      imageUrl: "",
      projectLink: "https://sam-conecta-web.vercel.app",
    },
    {
      title: "v0 AxisBot Interface",
      description: "Interfaz de chatbot con inteligencia artificial construida con Next.js 15 y Radix UI. Diseño modular con componentes accesibles y tema oscuro.",
      services: ["Next.js 15", "Radix UI", "shadcn/ui", "Tailwind"],
      imageUrl: "",
      projectLink: "",
    },
    {
      title: "Wallet Inmersys — Billetera Digital",
      description: "Plataforma de billetera digital con Genkit AI, autenticación Firebase y visualización de datos con Recharts. Stack moderno con Radix UI y shadcn.",
      services: ["Next.js 15", "Firebase", "Genkit AI", "Radix UI"],
      imageUrl: "",
      projectLink: "https://wallet-inmersys.vercel.app",
    },
    {
      title: "Snap2Code — Screenshot a Código con IA",
      description: "App que convierte capturas de pantalla en código funcional usando la API de Gemini. Ideal para prototipado rápido y aprendizaje visual.",
      services: ["Vite + React", "Gemini API", "IA Generativa"],
      imageUrl: "",
      projectLink: "https://snap2code-screenshot-generate.vercel.app",
    },
    {
      title: "Super Alpha Market",
      description: "Plataforma dedicada a ayudar a emprendedores y negocios a digitalizarse desde cero. Abarca desde la identidad de negocio hasta la integración en marketplace propio.",
      services: ["Vite + React", "Gemini API", "E-commerce", "Branding"],
      imageUrl: "",
      projectLink: "",
    },
    {
      title: "SLITHER CLONE",
      description: "Clon del clásico juego Snake con mecánicas modernas, efectos visuales y controles fluidos. Construido con Vite + React.",
      services: ["Vite + React", "Canvas", "Game Dev"],
      imageUrl: "",
      projectLink: "",
    },
    {
      title: "Colaborador Digital Integral — Merlin MKT (2025)",
      description: "Trabajé con múltiples marcas en desarrollo web, campañas publicitarias, diseño gráfico, producción de video y optimización de procesos. Clientes: ABO VIRTUAL, SAUNA MAR, TA' RIKO, AIRES DE DECORACIÓN, S&C MARKETING, ABORVIRTUAL, AUTOCLICK, MUEBLERÍA SOL DE CHILE, MUEBLERÍA PRÍNCIPE, PARQUE AUTOMOTRIZ LA COPA, INTEGRASEG, CONTAINER GREAT, KRETA REVESTIMIENTOS.",
      services: ["Desarrollo Web", "Publicidad Digital", "Diseño Gráfico", "Video", "Estrategia"],
      imageUrl: "",
      projectLink: "",
    },
    {
      title: "@laputamadrejordan (Instagram Personal)",
      description: "Mi perfil personal donde comparto mi día a día como desarrollador, proyectos freelance y reflexiones sobre tecnología, emprendimiento y vida en Santiago.",
      services: ["Marca Personal", "Contenido", "Comunicación Digital"],
      imageUrl: "",
      projectLink: "https://www.instagram.com/laputamadrejordan/",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-lacquer text-champagne">
      <h1 className="text-3xl md:text-4xl font-extrabold text-champagne mb-10 text-center font-display">Mis Proyectos</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
