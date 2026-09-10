/**
 * SUPABASE CLIENT — Para componentes del navegador (Client Components)
 *
 * ¿Qué hace?
 * Crea una conexión con Supabase que funciona en el navegador del usuario.
 * Usa la "anon key" (llave pública) que es segura para exponer.
 *
 * ¿Cuándo se usa?
 * En componentes con "use client" que necesitan leer/escribir datos.
 * Ejemplo: un formulario que envía un lead, un botón que carga proyectos.
 */
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
