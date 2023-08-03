import { axiosInstance } from '@/services/axiosInstance'
import {
  CharacterListProps,
  CharacterDataProps,
} from '@/types/dataCharactersType'
import { url } from 'inspector'

export const GetDataCharactersList = () => {
  const getCharactersList = async (
    url: string,
  ): Promise<CharacterListProps> => {
    try {
      const response = await axiosInstance.get(`${url}`)
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
      return dataInfos
    } catch (error) {
      console.log('Error ao fazer a request', error)
      throw error
    }
  }
  return {
    getCharactersList,
  }
}
