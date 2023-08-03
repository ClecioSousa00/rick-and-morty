export type CharacterDataProps = {
  id: number
  name: string
  status: string
  species: string
  gender: string
  origin: { name: string }
  image: string
  urlCharacter: string
}

export type CharacterListProps = {
  info: {
    nextPage: string | null
    prevPage: string | null
  }
  listCharacters: CharacterDataProps[]
}
