import Image from 'next/image'

import logo from '@/assets/logo.png'
import heroImage from '@/assets/hero-image.png'

import { NavBar } from '../NavBar'

export const Header = () => {
  return (
    <div className=" h-screen bg-hero-banner bg-cover  bg-center bg-no-repeat">
      <div className="h-full w-full bg-gradient-hero">
        <div className="relative h-full  px-5 py-5 2xl:container lg:px-14 lg:py-10 2xl:mx-auto">
          <header className="flex items-center justify-between">
            <Image
              className="w-24 md:w-36"
              src={logo}
              alt="Logo do rick and morty"
            />
            <NavBar />
          </header>
          <div className=" flex h-3/4 flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center ">
              <Image
                className="w-80   "
                src={logo}
                alt="Logo do rick and morty"
              />
              <p className="mt-10 w-full max-w-lg text-center tracking-wider">
                &quot;Rick and Morty&quot; é uma série animada de comédia e
                ficção científica criada por Justin Roiland e Dan Harmon. A
                trama segue as aventuras de Morty Smith, um adolescente comum, e
                seu avô, Rick Sanchez, um cientista genial e alcoólatra. Juntos,
                eles viajam por múltiplas dimensões e realidades, embarcando em
                jornadas intergalácticas cheias de caos e humor ácido.
              </p>
            </div>
            <Image
              className="absolute -bottom-48 z-10 animate-pulse lg:-bottom-[22rem]"
              src={heroImage}
              alt="Rick and Morty saindo de um portal"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
