import { Container } from '@/components/Container'
import { Searchbutton } from '@/components/SearchButton'
import { CharacterList } from '../CharacterList'
import { DashboardCharacters } from '../DashboardCharacters'
import { getCharactersList } from '@/utils/getDataCharacters'
import { CharacterListProps } from '@/types/dataCharactersType'

type DashboardProps = {
  data: CharacterListProps
}

export const Dashboard = ({ data }: DashboardProps) => {
  // const dataCharacterslist = await getCharactersList('/character')

  return (
    <main className=" bg-main-background bg-cover bg-center bg-no-repeat pt-40 lg:pt-80">
      <Container>
        <section>
          <div className=" flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0">
            <h2 className="text-2xl font-semibold lg:text-4xl">Personagens</h2>
            <Searchbutton />
          </div>
          {/* <CharacterList data={dataCharacterslist} /> */}

          <DashboardCharacters data={data} />
        </section>
      </Container>
    </main>
  )
}
