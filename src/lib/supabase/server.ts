/**
 * SUPABASE SERVER CLIENT — Para Server Components y API Routes
 *
 * ¿Qué hace?
 * Crea una conexión con Supabase que funciona en el servidor (no en el navegador).
 * Usa cookies del usuario para mantener la sesión activa.
 *
 * ¿Cuándo se usa?
 * En Server Components que necesitan saber QUIÉN está logueado.
 * En API Routes que procesan formularios o devuelven datos.
 * Ejemplo: cargar leads en el admin, guardar un nuevo lead desde el formulario.
 */
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Ignorar errores en Server Components (no tiene setAll)
          }
        },
      },
    }
  )
}
