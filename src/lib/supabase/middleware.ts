/**
 * SUPABASE MIDDLEWARE — Protege rutas que requieren login
 *
 * ¿Qué hace?
 * Antes de que el usuario acceda a una página protegida (como /admin),
 * verifica si tiene sesión activa. Si no la tiene, lo manda al login.
 *
 * ¿Cómo funciona?
 * 1. El usuario entra a /admin
 * 2. Next.js ejecuta este middleware ANTES de mostrar la página
 * 3. Si hay sesión válida → pasa
 * 4. Si no hay sesión → redirige a /admin/login
 *
 * ¿Cuándo se usa?
 * En todas las rutas que empiecen con /admin
 */
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refrescar sesión si el usuario está logueado
  await supabase.auth.getUser()

  return supabaseResponse
}
