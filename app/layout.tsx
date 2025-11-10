import type { Metadata } from 'next'
import './globals.css'
import MobileNavBottom from '@/components/navigation/MobileNavBottom'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'みんなメガネ割 | OWNDAYS - 2本目半額キャンペーン',
  description: 'OWNDAYSの特別キャンペーン！2本同時購入で2本目半額。家族・友達・恋人と一緒に、自分用に複数本購入でお得にメガネを購入しよう。',
  keywords: 'OWNDAYS, メガネ, サングラス, キャンペーン, 2本目半額, 割引',
    icons: {
      icon: '/images/owndays-favicon.jpg',
      shortcut: '/images/owndays-favicon.jpg',
      apple: '/images/owndays-favicon.jpg',
    },
  openGraph: {
    title: 'みんなメガネ割 | OWNDAYS',
    description: '2本同時購入で2本目半額！OWNDAYSの特別キャンペーン',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#B8181E" />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <script src="https://use.typekit.net/ldm8iso.js" async defer></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{Typekit.load({ async: true });}catch(e){}`,
          }}
          defer
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        {children}
        <MobileNavBottom />
      </body>
    </html>
  )
}
