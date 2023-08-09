import { CharacterListProps } from '@/types/dataCharactersType'

import { CardCharacter } from '../CardCharacter'
import { ButtonPagination } from '../ButtonPagination'
import { Loading } from '../Loading'

type DashboardCharactersProps = {
  data: CharacterListProps
  isLoading: boolean
  changePage: (url: string) => void
}

export const DashboardCharacters = ({
  changePage,
  isLoading,
  data,
}: DashboardCharactersProps) => {
  const handleClick = (url: string) => {
    const [, page] = url.split('?')
    console.log(page)

    changePage(`/character?${page}`)
  }

  // if (isLoading) {
  //   return <Loading />
  // }

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
      {isLoading ? (
        <div className="mt-28 flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        generateCardsCharacters()
      )}
      {/* <div className="mt-60 grid grid-cols-1 place-items-center gap-y-36 lg:grid-cols-3">
        {isLoading ? (
          <Loading />
        ) : (
          data.listCharacters.map((character) => (
            <CardCharacter key={character.id} data={character} />
          ))
        )}
      </div> */}
      <div className="mt-20 flex items-center justify-center gap-10">
        {data?.info?.prevPage && (
          <ButtonPagination
            // onClick={() => handleClick(data.info.nextPage as string)}
            handleClickPagination={handleClick}
            text="Voltar"
            nameIcon="arrowLeft"
            url={data.info.prevPage as string}
          />
        )}
        {data?.info?.nextPage && (
          <ButtonPagination
            // onClick={() => handleClick(data.info.nextPage as string)}
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
