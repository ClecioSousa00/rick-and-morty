'use client'
import { useFavoriteContext } from '@/contexts/favoritesContext'
import { CharacterDataProps } from '@/types/dataCharactersType'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'

type ButtonFavoriteProps = {
  character: CharacterDataProps
}

export const ButtonFavorite = ({ character }: ButtonFavoriteProps) => {
  const {
    charactersFavoritesList,
    addCharactersToFavorites,
    updateCharactersToFavorites,
  } = useFavoriteContext()

  const handleToggleFavorite = () => {
    const characterIsFavorite = charactersFavoritesList.some(
      (characterFavorite) => characterFavorite.id === character.id,
    )

    if (!characterIsFavorite) {
      addCharactersToFavorites(character)
      return
    }

    const filterCharactersLocalStorage = charactersFavoritesList.filter(
      (characterFavorite) => characterFavorite.id !== character.id,
    )
    updateCharactersToFavorites(filterCharactersLocalStorage)
    console.log(charactersFavoritesList)
  }

  const changeIconFavorite = () => {
    const characterIsFavorite = charactersFavoritesList.some(
      (characterFavorite) => characterFavorite.id === character.id,
    )
    if (!characterIsFavorite) {
      return <FaRegHeart size={24} />
    }
    return <FaHeart size={24} />
  }

  return (
    <button
      onClick={() => {
        handleToggleFavorite()
      }}
      className="cursor-pointer"
    >
      {changeIconFavorite()}
    </button>
  )
}
