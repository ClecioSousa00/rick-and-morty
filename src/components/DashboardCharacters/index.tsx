import { CharacterListProps } from '@/types/dataCharactersType'

import { CardCharacter } from '@/components/CardCharacter'
import { ButtonPagination } from '@/components/ButtonPagination'
import { Loading } from '@/components/Loading'
import { RefObject } from 'react'

type DashboardCharactersProps = {
  data: CharacterListProps
  isLoading: boolean
  changePage: (url: string) => void
  dashboardRef: RefObject<HTMLDivElement>
}

export const DashboardCharacters = ({
  changePage,
  isLoading,
  data,
  dashboardRef,
}: DashboardCharactersProps) => {
  const handleClick = (url: string) => {
    const [, page] = url.split('?')

    if (dashboardRef.current) {
      dashboardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    changePage(`/character?${page}`)
  }

  const generateCardsCharacters = () => {
    return (
      <div className="mt-60 grid grid-cols-1 place-items-center gap-y-36 md:grid-cols-2 lg:grid-cols-4">
        {data.listCharacters.map((character) => (
          <CardCharacter key={character.id} data={character} />
        ))}
      </div>
    )
  }

  return (
    <>
      <div></div>
      {isLoading ? (
        <div className="mt-28 flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        generateCardsCharacters()
      )}
      <div className="mt-20 flex items-center justify-center gap-10">
        {data?.info?.prevPage && (
          <ButtonPagination
            handleClickPagination={handleClick}
            text="Voltar"
            nameIcon="arrowLeft"
            url={data.info.prevPage as string}
          />
        )}
        {data?.info?.nextPage && (
          <ButtonPagination
            handleClickPagination={handleClick}
            url={data.info.nextPage as string}
            text="Avançar"
            nameIcon="arrowRight"
          />
        )}
      </div>
    </>
  )
}
