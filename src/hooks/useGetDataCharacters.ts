import { axiosInstance } from '@/services/axiosInstance'
import {
  CharacterDataProps,
  CharacterListProps,
} from '@/types/dataCharactersType'
import { useCallback, useEffect, useState } from 'react'

export const useGetDataCharacters = () => {
  const [characterList, setCharacterList] = useState<CharacterListProps>(
    {} as CharacterListProps,
  )
  const [page, setPage] = useState('/character')
  const [isLoading, setIsLoading] = useState(true)

  const getMoreCharacters = useCallback(async () => {
    // setIsLoading(true)
    try {
      const response = await axiosInstance.get(page)
      console.log(`url: ${page}`)

      const dataListCharacters: CharacterDataProps[] =
        response.data.results.map((character: CharacterDataProps) => ({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: { name: character.origin.name },
          image: character.image,
          urlCharacter: character.urlCharacter,
        }))
      const { next, prev }: { next: string | null; prev: string | null } =
        response.data.info

      const dataInfos: CharacterListProps = {
        info: { nextPage: next, prevPage: prev },
        listCharacters: dataListCharacters,
      }
      setCharacterList(dataInfos)
      console.log(dataInfos)
    } catch (error) {
      setCharacterList({} as CharacterListProps)
      console.log('Error ao fazer a request', error)
    } finally {
      setIsLoading(false)
    }
  }, [page])

  const changePage = (url: string) => {
    console.log(url)
    setIsLoading(true)
    setPage(url)
  }

  useEffect(() => {
    getMoreCharacters()
    console.log('executou o effect', page)
  }, [page, getMoreCharacters])

  return {
    characterList,
    isLoading,
    changePage,
  }
}
