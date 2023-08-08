'use client'
import { FavoriteProvider } from '@/contexts/favoritesContext'
import { ReactNode } from 'react'

type Provider = {
  children: ReactNode
}
export const Providers = ({ children }: Provider) => {
  return <FavoriteProvider>{children}</FavoriteProvider>
}
