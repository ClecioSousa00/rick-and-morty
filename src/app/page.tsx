import { Container } from '@/components/Container'
import { Dashboard } from '@/components/Dashboard'
import { DashboardCharacters } from '@/components/DashboardCharacters'
import { Searchbutton } from '@/components/SearchButton'
import { getCharactersList } from '@/utils/getDataCharacters'

export default async function Home() {
  // const page =
  //   typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

  // const search =
  //   typeof searchParams.search === 'string' ? searchParams.search : undefined
  // console.log(page)
  // const dataCharacterslist = await getCharactersList(`/character/?page=${page}`)
  // console.log(dataCharacterslist)

  return (
    <main className=" bg-main-background bg-cover bg-center bg-no-repeat pt-40 lg:pt-80">
      <Container>
        <Dashboard />
      </Container>
    </main>
  )
}
