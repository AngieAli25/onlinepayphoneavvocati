import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Online PayPhone - Valorizza il tuo tempo professionale',
  description: 'La piattaforma che consente agli avvocati di monetizzare ogni minuto speso al telefono, in modo trasparente, immediato e professionale.',
  keywords: 'consulenza telefonica, avvocati, pagamento automatico, fatturazione, studio legale',
  authors: [{ name: 'Online PayPhone' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#a03478',
  openGraph: {
    title: 'Online PayPhone - Valorizza il tuo tempo professionale',
    description: 'Monetizza ogni minuto delle tue consulenze telefoniche con pagamento automatico e fatturazione immediata.',
    url: 'https://www.onlinepayphone.com',
    siteName: 'Online PayPhone',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter font-medium antialiased">
        {children}
      </body>
    </html>
  )
}