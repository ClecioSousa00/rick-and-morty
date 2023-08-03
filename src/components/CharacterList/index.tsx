// import { GetDataCharactersList } from '@/lib/GetCharactersList'
// import { CardCharacter } from '../CardCharacter'
// import { CharacterDataProps } from '@/types/dataCharactersType'
// import { ButtonPagination } from '../ButtonPagination'
// import { DashboardCharacters } from '../DashboardCharacters'

// export const CharacterList = async () => {
//   return (
//     <>
//       <DashboardCharacters />
//     </>
//   )
// }
import { CardCharacter } from '../CardCharacter'
import { CharacterListProps } from '@/types/dataCharactersType'
import { ButtonPagination } from '../ButtonPagination'
import { DashboardCharacters } from '../DashboardCharacters'
import { getCharactersList } from '@/utils/getDataCharacters'

type Props = {
  data: CharacterListProps
}

export const CharacterList = async ({ data }: Props) => {
  // const dataCharacterslist = await getCharactersList('/character')

  return (
    <>
      <div className="mt-48 grid grid-cols-1 place-items-center gap-y-36 lg:grid-cols-3">
        {data?.listCharacters.map((character) => (
          <CardCharacter key={character.id} data={character} />
        ))}
      </div>
      <div className="mt-20 flex items-center justify-center gap-10">
        <ButtonPagination text="Voltar" nameIcon="arrowLeft" />
        <ButtonPagination text="Avançar" nameIcon="arrowRight" />
      </div>
    </>
  )
}
// import { GetDataCharactersList } from '@/lib/GetCharactersList'
// import { CardCharacter } from '../CardCharacter'
// import { CharacterDataProps } from '@/types/dataCharactersType'
// import { ButtonPagination } from '../ButtonPagination'
// import { DashboardCharacters } from '../DashboardCharacters'

// export const CharacterList = async () => {
//   const { getCharactersList } = GetDataCharactersList()
//   const dataList = await getCharactersList('/character')

//   console.log(dataList)

//   return (
//     <>
//       <DashboardCharacters data={dataList} />
//     </>
//   )
// }

// import { GetDataCharactersList } from '@/lib/GetCharactersList'
// import { CardCharacter } from '../CardCharacter'
// import { CharacterDataProps } from '@/types/dataCharactersType'
// import { ButtonPagination } from '../ButtonPagination'

// export const CharacterList = async () => {
//   const { getCharactersList } = GetDataCharactersList()
//   const dataList = await getCharactersList('/character')

//   console.log(dataList)

//   return (
//     <>
//       <div className="mt-48 grid grid-cols-1 place-items-center gap-y-36 lg:grid-cols-3">
//         {dataList.listCharacters.map((character) => (
//           <CardCharacter key={character.id} data={character} />
//         ))}
//       </div>
//       <div className="mt-20 flex items-center justify-center gap-10">
//         <ButtonPagination text="Voltar" nameIcon="arrowLeft" />
//         <ButtonPagination text="Avançar" nameIcon="arrowRight" />
//       </div>
//     </>
//   )
// }
