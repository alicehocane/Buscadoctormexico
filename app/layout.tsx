import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Busca Doctor México | Encuentra médicos de confianza en México",
  description: "Encuentra médicos de confianza por ciudad, especialidad o padecimientos atendidos en México.",
  keywords: "médicos, doctores, especialistas, México, directorio médico",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
        <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/buscadoctormexico_favicon_180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/buscadoctormexico_favicon_32.png" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-43ZLD2HGVW"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-43ZLD2HGVW');
          `}
        </Script>
      <meta name="google-site-verification" content="QNN0jVEy13PIPzRHgRW04pKECn2HvVJxkR6eAJAfiqg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
