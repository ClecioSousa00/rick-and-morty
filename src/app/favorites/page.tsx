import { Container } from '@/components/Container'
import { DashboardFavorites } from '@/components/DashboardFavorites'

export default function favorites() {
  return (
    <main className=" bg-dark pt-40 lg:pt-10">
      <Container>
        <h2 className=" w-full max-w-fit border-b-[0.1rem]  border-white border-opacity-60 text-2xl font-medium lg:text-3xl">
          Favoritos
        </h2>
        <DashboardFavorites />
      </Container>
    </main>
  )
}
