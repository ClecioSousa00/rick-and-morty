import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import { Header } from '@/components/Header'
import { FavoriteProvider } from '@/contexts/favoritesContext'
import { Footer } from '@/components/Footer'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  title: 'Rick and Morty - Personagens',
  description:
    'Explore a plataforma de listagem e busca de personagens de Rick and Morty. Adicione seus favoritos e mergulhe no universo da série!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${raleway.variable} font-sans text-white`}>
        <FavoriteProvider>
          <Header />
          {children}
          <Footer />
        </FavoriteProvider>
      </body>
    </html>
  )
}
