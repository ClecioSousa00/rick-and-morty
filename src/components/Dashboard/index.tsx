'use client'
import { Searchbutton } from '@/components/SearchButton'
import { DashboardCharacters } from '../DashboardCharacters'
import { getCharactersList } from '@/utils/getDataCharacters'
import { CharacterListProps } from '@/types/dataCharactersType'
import { useState, useEffect } from 'react'
import { MessageEmptySearch } from '../MessageEmptySearch'

export const Dashboard = () => {
  const [characterList, setCharacterList] = useState<CharacterListProps>(
    {} as CharacterListProps,
  )
  const [page, setPage] = useState('/character')
  const [isLoading, setIsLoading] = useState(false)

  const getMoreCharacters = async (url: string) => {
    try {
      const response = await getCharactersList(url)
      console.log(response)

      setCharacterList(response)
      setIsLoading(true)
    } catch (error) {
      setCharacterList({} as CharacterListProps)
    }

    const response = await getCharactersList(url)
    console.log(response)

    setCharacterList(response)
    setIsLoading(true)
  }
  useEffect(() => {
    getMoreCharacters(page)
    console.log('executou o effect', page)
  }, [page])

  const changePage = (url: string) => {
    setPage(url)
  }

  return (
    <section>
      <div className=" flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0">
        <h2 className="text-2xl font-semibold lg:text-4xl">Personagens</h2>
        <Searchbutton handleGetCharacter={changePage} />
      </div>
      {characterList.listCharacters?.length > 0 ? (
        <DashboardCharacters
          data={characterList}
          isLoading={isLoading}
          changePage={changePage}
        />
      ) : (
        <MessageEmptySearch />
      )}
    </section>
  )
}
