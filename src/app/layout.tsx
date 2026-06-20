import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Human Health Park | El Futuro de la Salud y el Entretenimiento en Madrid",
  description: "Descubre el Human Health Park: 120 hectáreas de innovación en Madrid Norte donde la medicina, formación profesional y ocio tecnológico se fusionan. 7 mundos temáticos interactivos, 3.8M visitantes anuales esperados.",
  keywords: "Human Health Park, Madrid, salud, entretenimiento, parque, medicina, innovación, formación profesional",
  robots: "index, follow",
  openGraph: {
    title: "Human Health Park | Madrid",
    description: "El futuro de la salud y el entretenimiento",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0369a1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>❤️</text></svg>" />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
