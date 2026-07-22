import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton"; // Import the new component

export const metadata: Metadata = {
  title: "Jorjai Digitalizaciones - Soluciones Digitales Profesionales",
  description: "Jorjai Digitalizaciones - Landing Pages, Sitios Web, E-Commerce, UX/UI y Automatización para PYMEs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true}>
        <Layout>
          {children}
        </Layout>
        <WhatsAppButton />
      </body>
    </html>
  );
}
