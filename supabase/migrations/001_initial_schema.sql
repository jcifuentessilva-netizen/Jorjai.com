-- ============================================
-- JORJAI.COM — Esquema inicial de base de datos
-- ============================================
-- Este archivo crea todas las tablas necesarias.
-- Se ejecuta UNA VEZ en Supabase SQL Editor.
--
-- ¿Qué es SQL?
-- Es el lenguaje para hablar con bases de datos.
-- CREATE TABLE = crear una tabla
-- INSERT INTO = guardar datos
-- SELECT = leer datos
-- ============================================

-- ============================================
-- PORTAFOLIO — Tus proyectos
-- ============================================
-- ¿Para qué sirve?
-- Guardar información de cada proyecto que muestras
-- en tu portafolio. En lugar de tenerlo hardcodeado
-- en el código, está en la base de datos y puedes
-- editarlo desde el panel admin.

CREATE TABLE IF NOT EXISTS portfolio_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,                          -- Nombre del proyecto
  slug TEXT UNIQUE NOT NULL,                    -- URL amigable (ej: "sam-conecta")
  description TEXT NOT NULL,                    -- Descripción corta
  problem TEXT,                                 -- Qué problema resuelve
  concept TEXT,                                 -- Concepto creativo
  solution TEXT,                                -- Cómo se resolvió
  result TEXT,                                  -- Resultado obtenido
  category TEXT NOT NULL,                       -- Categoría: branding, logo, web, etc.
  featured BOOLEAN DEFAULT false,               -- ¿Destacado en la home?
  status TEXT DEFAULT 'published',              -- published, draft, archived
  project_url TEXT,                             -- Link al proyecto vivo
  technologies TEXT[],                          -- Stack tecnológico used
  sort_order INTEGER DEFAULT 0,                 -- Orden de aparición
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- PORTAFOLIO — Imágenes de cada proyecto
-- ============================================
-- Cada proyecto puede tener múltiples imágenes
-- (galería). Relacionadas por project_id.

CREATE TABLE IF NOT EXISTS portfolio_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES portfolio_projects(id) ON DELETE CASCADE,
  url TEXT NOT NULL,                            -- URL de la imagen (Supabase Storage)
  alt TEXT NOT NULL,                            -- Texto alternativo (accesibilidad + SEO)
  sort_order INTEGER DEFAULT 0,                 -- Orden en la galería
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- SERVICIOS — Lo que ofreces
-- ============================================
-- Cada servicio con su descripción, precio base
-- y tiempo estimado. Los precios se editan desde
-- el admin, NO están hardcodeados.

CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,                           -- Nombre del servicio
  slug TEXT UNIQUE NOT NULL,                    -- URL amigable
  description TEXT NOT NULL,                    -- Descripción
  price_from INTEGER DEFAULT 0,                 -- Precio desde (en CLP)
  estimated_time TEXT,                          -- Tiempo estimado
  revisions INTEGER DEFAULT 2,                  -- N° de revisiones incluidas
  features TEXT[],                              -- Qué incluye
  category TEXT NOT NULL,                       -- Categoría
  active BOOLEAN DEFAULT true,                  -- ¿Activo?
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- PAQUETES COMERCIALES
-- ============================================
-- Packs fáciles de entender para el cliente.
-- Starter, Brand, Social, Pro, Custom.

CREATE TABLE IF NOT EXISTS service_packages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,                           -- "Pack Starter"
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL,                       -- Precio en CLP
  price_monthly INTEGER,                        -- Precio mensual (suscripción)
  features TEXT[],                              -- Qué incluye
  popular BOOLEAN DEFAULT false,                -- ¿Destacado?
  active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- LEADS — Personas interesadas en tus servicios
-- ============================================
-- Cuando alguien llena el formulario de contacto
-- o te escribe por WhatsApp, se guarda aquí.
-- El CRM se construye alrededor de esta tabla.

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,                           -- Nombre del lead
  email TEXT,                                   -- Email
  phone TEXT,                                   -- WhatsApp / teléfono
  instagram TEXT,                               -- Usuario de Instagram
  company TEXT,                                 -- Empresa o marca
  business_type TEXT,                           -- Tipo de negocio
  service_requested TEXT,                       -- Servicio que le interesa
  budget TEXT,                                  -- Presupuesto aproximado
  deadline TEXT,                                -- Plazo deseado
  description TEXT,                             -- Descripción del proyecto
  source TEXT DEFAULT 'web',                    -- De dónde viene: web, instagram, whatsapp, etc.
  medium TEXT DEFAULT 'organic',                -- organic, referral, paid
  campaign TEXT,                                -- Campaña UTM
  utm_params JSONB,                             -- Todos los parámetros UTM
  status TEXT DEFAULT 'new',                    -- new, contacted, interested, quoted, negotiating, paid, delivered
  tags TEXT[],                                  -- Etiquetas: branding, logo, urgente
  notes TEXT,                                   -- Notas internas
  estimated_value INTEGER DEFAULT 0,            -- Valor estimado en CLP
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- LEAD EVENTS — Historial de cada lead
-- ============================================
-- Cada vez que pasa algo con un lead, se registra.
-- Ejemplo: "Contactado por WhatsApp", "Cotización enviada"

CREATE TABLE IF NOT EXISTS lead_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,                     -- contact, note, status_change, email_sent
  description TEXT NOT NULL,                    -- Qué pasó
  created_by TEXT DEFAULT 'system',             -- quién lo hizo
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- ANALYTICS — Tracking de clics y fuentes
-- ============================================
-- Cada vez que alguien hace click en un CTA
-- (botón de WhatsApp, "Solicitar cotización"),
-- se registra de dónde viene.

CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL,                     -- click, form_submit, whatsapp_click
  source TEXT,                                  -- instagram, web, tiktok
  medium TEXT,                                  -- organic, referral, paid
  campaign TEXT,                                -- Campaña UTM
  content TEXT,                                 -- CTA específico
  landing_page TEXT,                            -- Página de destino
  referrer TEXT,                                -- Página que lo originó
  user_agent TEXT,                              -- Navegador del usuario
  ip_address TEXT,                              -- IP (para métricas, no para tracking personal)
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- ÍNDICES — Para que las búsquedas sean rápidas
-- ============================================
-- Sin índices, cada búsqueda escanea TODA la tabla.
-- Con índices, va directo al dato.

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_lead_events_lead ON lead_events(lead_id);
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_projects(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_projects(featured);
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_analytics_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_created ON analytics_events(created_at DESC);

-- ============================================
-- RLS (Row Level Security) — Seguridad básica
-- ============================================
-- Por ahora, solo habilitamos RLS pero con políticas permisivas.
-- Cuando conectemos auth, restringiremos el acceso.

ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Políticas permisivas (lectura pública para el sitio web)
CREATE POLICY "Public read portfolio" ON portfolio_projects FOR SELECT USING (status = 'published');
CREATE POLICY "Public read portfolio images" ON portfolio_images FOR SELECT USING (true);
CREATE POLICY "Public read services" ON services FOR SELECT USING (active = true);
CREATE POLICY "Public read packages" ON service_packages FOR SELECT USING (active = true);

-- Insertar leads desde formularios (cualquiera puede enviar)
CREATE POLICY "Anyone can insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert lead events" ON lead_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert analytics" ON analytics_events FOR INSERT WITH CHECK (true);

-- Admin: acceso total (usando service_role key)
CREATE POLICY "Admin full access portfolio" ON portfolio_projects FOR ALL USING (true);
CREATE POLICY "Admin full access images" ON portfolio_images FOR ALL USING (true);
CREATE POLICY "Admin full access services" ON services FOR ALL USING (true);
CREATE POLICY "Admin full access packages" ON service_packages FOR ALL USING (true);
CREATE POLICY "Admin full access leads" ON leads FOR ALL USING (true);
CREATE POLICY "Admin full access events" ON lead_events FOR ALL USING (true);
CREATE POLICY "Admin full access analytics" ON analytics_events FOR ALL USING (true);
