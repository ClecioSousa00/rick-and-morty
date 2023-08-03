'use client'
import { CharacterListProps } from '@/types/dataCharactersType'
import { ButtonPagination } from '../ButtonPagination'
import { CardCharacter } from '../CardCharacter'
import { useEffect, useState } from 'react'
import { getCharactersList } from '@/utils/getDataCharacters'

// type DashboardCharactersProps = {
//   data: CharacterListProps
// }

export const DashboardCharacters = () => {
  const [characterList, setCharacterList] = useState<CharacterListProps>(
    {} as CharacterListProps,
  )
  const [page, setPage] = useState('/character')
  const [loading, setLoading] = useState(false)

  const getMoreCharacters = async (url: string) => {
    const response = await getCharactersList(url)
    setCharacterList(response)
    setLoading(true)
  }
  useEffect(() => {
    getMoreCharacters(page)
    console.log('executou o effect', page)
  }, [page])

  return (
    <>
      <div className="mt-48 grid grid-cols-1 place-items-center gap-y-36 lg:grid-cols-3">
        {loading &&
          characterList.listCharacters.map((character) => (
            <CardCharacter key={character.id} data={character} />
          ))}
      </div>
      <div className="mt-20 flex items-center justify-center gap-10">
        {characterList?.info?.prevPage && (
          <ButtonPagination
            text="Voltar"
            nameIcon="arrowLeft"
            onClick={() => setPage(characterList.info.prevPage as string)}
          />
        )}
        {characterList?.info?.nextPage && (
          <ButtonPagination
            text="Avançar"
            nameIcon="arrowRight"
            onClick={() => setPage(characterList.info.nextPage as string)}
          />
        )}
      </div>
    </>
  )
}
