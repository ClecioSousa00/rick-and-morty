import { useGetCharactersList } from '@/hooks/useGetCharactersList'
import { CardCharacter } from '../CardCharacter'
import { CharacterDataProps } from '@/types/dataCharactersType'
// import { axiosInstance } from '@/services/axiosInstance'

// type CharacterDataProps = {
//   id: number
//   name: string
//   status: string
//   species: string
//   gender: string
//   origin: string
//   image: string
//   urlCharacter: string
// }

// type CharacterListProps = {
//   info: {
//     nextPage: string | null
//     prevPage: string | null
//   }
//   listCharacters: CharacterDataProps[]
// }

// const getCharactersList = async (): Promise<CharacterListProps> => {
//   try {
//     const response = await axiosInstance.get('/character')
//     const dataListCharacters: CharacterDataProps[] = response.data.results.map(
//       (character: CharacterDataProps) => ({
//         id: character.id,
//         name: character.name,
//         status: character.status,
//         species: character.species,
//         gender: character.gender,
//         origin: character.origin,
//         image: character.image,
//         urlCharacter: character.urlCharacter,
//       }),
//     )
//     const { next, prev }: { next: string | null; prev: string | null } =
//       response.data.info

//     const dataInfos: CharacterListProps = {
//       info: { nextPage: next, prevPage: prev },
//       listCharacters: dataListCharacters,
//     }
//     return dataInfos
//   } catch (error) {
//     console.log('Error ao fazer a request', error)
//     throw error
//   }
// }

export const CharacterList = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getCharactersList } = useGetCharactersList()
  const dataList = await getCharactersList()

  console.log(dataList)

  return (
    <div className="mt-48 grid grid-cols-1 place-items-center gap-y-36 lg:grid-cols-3">
      {dataList.listCharacters.map((character) => (
        <CardCharacter key={character.id} data={character} />
      ))}
    </div>
  )
}
