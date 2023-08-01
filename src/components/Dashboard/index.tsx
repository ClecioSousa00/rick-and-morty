import { Container } from '@/components/Container'
import { Searchbutton } from '@/components/SearchButton'

export const Dashboard = () => {
  return (
    <main className="h-[800px] bg-main-background bg-cover bg-center bg-no-repeat pt-40 lg:pt-80">
      <Container>
        <section>
          <div className=" flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0">
            <h2 className="text-2xl font-semibold lg:text-4xl">Personagens</h2>
            <Searchbutton />
          </div>
        </section>
      </Container>
    </main>
  )
}
