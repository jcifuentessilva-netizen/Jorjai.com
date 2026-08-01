# Portafolio de Jordan Isaac

Sitio web del portafolio de **Jordan Digitalizaciones**, creado con Next.js y Tailwind CSS. Muestra los servicios de digitalización de negocios, identidad de marca y creación de contenido, con un catálogo de precios y cotizador en tiempo real.

## Empezando

1. **Instala las dependencias:**
   ```bash
   npm install
   ```
2. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts

| Comando        | Descripción                                             |
|----------------|---------------------------------------------------------|
| `npm run dev`  | Servidor de desarrollo.                                 |
| `npm run build`| Genera export estático en `out/` (salida `output: "export"`). |
| `npm start`    | Sirve la build.                                         |
| `npm run lint` | ESLint sobre `src/`.                                    |

## Estructura

- `src/app/` — páginas (inicio, sobre mí, servicios, proyectos, contacto) y sub-páginas de servicios.
- `src/components/` — componentes de UI (Hero, tarjetas de servicios/proyectos, layout, botón de WhatsApp).
- `src/data/services.ts` — fuente de verdad de precios, planes y costos de herramientas.