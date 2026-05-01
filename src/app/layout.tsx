import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'FleetLink - Inteligentne zarządzanie flotą GPS',
    template: '%s | FleetLink',
  },
  description: 'FleetLink to zaawansowany system GPS i telematyki dla profesjonalnych flot. Monitoruj pojazdy, redukuj koszty paliwa i popraw bezpieczeństwo kierowców.',
  keywords: ['GPS', 'flota', 'telematyka', 'monitoring pojazdów', 'zarządzanie flotą'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://fleetlink.pl',
    siteName: 'FleetLink',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className="font-sans bg-alpineMist text-inkObsidian antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
