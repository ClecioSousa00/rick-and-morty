'use client'

import { useFavoriteContext } from '@/contexts/favoritesContext'
import { CardCharacter } from '../CardCharacter'
import { MortySvg } from '../icons/MortySvg'

export const DashboardFavorites = () => {
  const { charactersFavoritesList } = useFavoriteContext()
  return (
    <section className="lg:mt-44">
      {charactersFavoritesList.length > 0 ? (
        <div className="mt-48 grid grid-cols-1 place-items-center gap-y-36 pb-10 lg:grid-cols-3">
          {charactersFavoritesList.map((character) => (
            <CardCharacter key={character.id} data={character} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <MortySvg height={200} width={200} />
          <p className=" mt-8 max-w-md  pb-5 text-center text-lg font-semibold tracking-wider">
            Oh, caramba, Rick! Olha só, nenhum personagem favorito aqui. Isso é
            tipo... decepcionante, sabe?
          </p>
        </div>
      )}
    </section>
  )
}
