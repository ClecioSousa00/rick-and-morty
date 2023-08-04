import { Container } from '@/components/Container'
import { Dashboard } from '@/components/Dashboard'
import { DashboardCharacters } from '@/components/DashboardCharacters'
import { Searchbutton } from '@/components/SearchButton'
import { getCharactersList } from '@/utils/getDataCharacters'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  console.log(page)
  const dataCharacterslist = await getCharactersList(`/character/?page=${page}`)
  console.log(dataCharacterslist)

  return (
    <main className=" bg-main-background bg-cover bg-center bg-no-repeat pt-40 lg:pt-80">
      <Container>
        <section>
          <div className=" flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0">
            <h2 className="text-2xl font-semibold lg:text-4xl">Personagens</h2>
            <Searchbutton />
          </div>
          {/* <CharacterList data={dataCharacterslist} /> */}

          <DashboardCharacters data={dataCharacterslist} />
        </section>
      </Container>
    </main>
  )
}
