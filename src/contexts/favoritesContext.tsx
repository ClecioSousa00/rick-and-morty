'use client'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CharacterDataProps } from '@/types/dataCharactersType'
import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'

type FavoriteProviderProps = {
  children: ReactNode
}

type FavoriteContextProps = {
  charactersFavoritesList: CharacterDataProps[]
  addCharactersToFavorites: (character: CharacterDataProps) => void
  updateCharactersToFavorites: (character: CharacterDataProps[]) => void
}

const FavoriteContext = createContext({} as FavoriteContextProps)

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const { character, setCharacterLocalStorage } = useLocalStorage()
  const [charactersFavoritesList, setCharactersFavoritesList] = useState<
    CharacterDataProps[]
  >([])

  useEffect(() => {
    if (character.length) {
      setCharactersFavoritesList([...character])
    }
  }, [character])

  const addCharactersToFavorites = (character: CharacterDataProps) => {
    const characters = [...charactersFavoritesList, character]
    setCharactersFavoritesList(characters)
    setCharacterLocalStorage(characters)
  }

  const updateCharactersToFavorites = (character: CharacterDataProps[]) => {
    setCharactersFavoritesList([...character])
    setCharacterLocalStorage([...character])
  }

  return (
    <FavoriteContext.Provider
      value={{
        charactersFavoritesList,
        addCharactersToFavorites,
        updateCharactersToFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export const useFavoriteContext = () => useContext(FavoriteContext)
