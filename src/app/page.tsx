import { Container } from '@/components/Container'
import { Dashboard } from '@/components/Dashboard'

export default async function Home() {
  return (
    <main className=" bg-main-gradient py-40 lg:pt-10">
      <Container>
        <Dashboard />
      </Container>
    </main>
  )
}
// <main className=" bg-main-background bg-cover bg-center bg-no-repeat pt-40 lg:pt-80">
