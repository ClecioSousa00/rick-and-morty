import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { Providers } from '@/providers/provider'
import { FavoriteProvider } from '@/contexts/favoritesContext'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  title: 'Rick and Morty',
  description: 'Personagens de Rick and Morty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.variable} font-sans text-white`}>
        <FavoriteProvider>
          <Header />
          {children}
        </FavoriteProvider>
      </body>
    </html>
  )
}
