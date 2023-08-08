'use client'
import { CharacterDataProps } from '@/types/dataCharactersType'
import { useEffect, useState } from 'react'

export const useLocalStorage = () => {
  const key = '@RickAndMorty:characters'
  const [character, setCharacter] = useState<CharacterDataProps[]>([])

  useEffect(() => {
    const getCharacterLocalStorage = async () => {
      const data = await localStorage.getItem(key)
      const charactersList = JSON.parse(data as string)
      setCharacter(charactersList as CharacterDataProps[])
      console.log(charactersList)
    }
    getCharacterLocalStorage()
  }, [])

  const setCharacterLocalStorage = (data: CharacterDataProps[]) => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  return {
    character,
    setCharacterLocalStorage,
  }
}
