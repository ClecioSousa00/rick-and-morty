'use client'
import { useGetDataCharacters } from '@/hooks/useGetDataCharacters'

import { SearchButton } from '@/components/SearchButton'
import { DashboardCharacters } from '@/components/DashboardCharacters'
import { MessageEmptySearch } from '@/components/MessageEmptySearch'
import { Loading } from '@/components/Loading'

export const Dashboard = () => {
  const { characterList, isLoading, changePage } = useGetDataCharacters()

  if (isLoading) {
    return (
      <div className="mt-40 flex items-center justify-center">
        <Loading />
      </div>
    )
  }

  return (
    <section>
      <div className=" flex flex-col items-center gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0">
        <button
          onClick={() => changePage('/character')}
          className=" border-b-[0.1rem] border-white border-opacity-60   text-2xl font-medium lg:text-3xl"
        >
          Personagens
        </button>
        <SearchButton handleGetCharacter={changePage} />
      </div>
      {characterList.listCharacters?.length ? (
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
