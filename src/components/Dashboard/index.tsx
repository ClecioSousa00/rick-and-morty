'use client'
import { useGetDataCharacters } from '@/hooks/useGetDataCharacters'

import { Searchbutton } from '@/components/SearchButton'
import { DashboardCharacters } from '@/components/DashboardCharacters'
import { MessageEmptySearch } from '@/components/MessageEmptySearch'
import { Loading } from '@/components/Loading'

export const Dashboard = () => {
  const { characterList, isLoading, changePage } = useGetDataCharacters()
  console.log(characterList)

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
        <Searchbutton handleGetCharacter={changePage} />
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
// 'use client'
// import { Searchbutton } from '@/components/SearchButton'
// import { DashboardCharacters } from '../DashboardCharacters'
// import { getCharactersList } from '@/utils/getDataCharacters'
// import { CharacterListProps } from '@/types/dataCharactersType'
// import { useState, useEffect, useCallback } from 'react'
// import { MessageEmptySearch } from '../MessageEmptySearch'

// export const Dashboard = () => {
//   const [characterList, setCharacterList] = useState<CharacterListProps>(
//     {} as CharacterListProps,
//   )
//   const [page, setPage] = useState('/character')
//   const [isLoading, setIsLoading] = useState(false)

//   const getMoreCharacters = useCallback(async (url: string) => {
//     try {
//       const response = await getCharactersList(url)
//       console.log(response)

//       setCharacterList(response)
//       setIsLoading(true)
//     } catch (error) {
//       setCharacterList({} as CharacterListProps)
//     }

//     const response = await getCharactersList(url)
//     console.log(response)

//     setCharacterList(response)
//     setIsLoading(true)
//   }, [])

//   useEffect(() => {
//     getMoreCharacters(page)
//     console.log('executou o effect', page)
//   }, [page, getMoreCharacters])

//   const changePage = (url: string) => {
//     setPage(url)
//   }

//   return (
//     <section>
//       <div className=" flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0">
//         <button
//           onClick={() => getMoreCharacters('/character')}
//           className="rounded-3xl border-2 border-white px-4 text-2xl font-medium lg:text-3xl"
//         >
//           Personagens
//         </button>
//         <Searchbutton handleGetCharacter={changePage} />
//       </div>
//       {characterList.listCharacters?.length > 0 ? (
//         <DashboardCharacters
//           data={characterList}
//           isLoading={isLoading}
//           changePage={changePage}
//         />
//       ) : (
//         <MessageEmptySearch />
//       )}
//     </section>
//   )
// }
