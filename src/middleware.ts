/**
 * MIDDLEWARE DE NEXT.JS — Protege rutas /admin
 *
 * ¿Qué es un middleware?
 * Es código que se ejecuta ANTES de que la página se muestre al usuario.
 * Next.js lo ejecuta automáticamente en cada request.
 *
 * ¿Qué hace este middleware?
 * 1. Verifica si el usuario entra a /admin/*
 * 2. Si entra, verifica si tiene sesión de Supabase (login)
 * 3. Si tiene sesión → lo deja pasar
 * 4. Si NO tiene sesión → lo redirige a /admin/login
 *
 * Las rutas públicas (/, /servicios, /proyectos, /contacto, /link)
 * NO pasan por este middleware. Cualquiera puede verlas.
 */
import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Proteger solo rutas de admin:
     * - /admin: página principal del admin
     * - /admin/:path*: todas las sub-rutas del admin
     * Excluir: /admin/login, api, _next, static files
     */
    '/admin/:path*',
  ],
}
