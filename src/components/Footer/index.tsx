import Image from 'next/image'
import Link from 'next/link'

import { InstagramSvg } from '../icons/InstagramSvg'
import { GithubSvg } from '../icons/GithubSvg'
import { LinkedinSvg } from '../icons/LinkedinIcon'
import { Container } from '@/components/Container'

import logo from '@/assets/logo.png'
import portalImage from '@/assets/portal.png'
import rickAndMortyInPortal from '@/assets/rickAndMortyPortal.png'

const linksProfile = [
  {
    icon: <InstagramSvg />,
    href: 'https://instagram.com/clecio_sousa_?igshid=NGExMmI2YTkyZg==',
  },
  {
    icon: <GithubSvg />,
    href: 'https://github.com/ClecioSousa00',
  },
  {
    icon: <LinkedinSvg />,
    href: 'www.linkedin.com/in/clécio-sousa',
  },
]

const generateLinksProfile = () => {
  return (
    <div className="my-4 flex items-center gap-8">
      {linksProfile.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          className="transition-all hover:-translate-y-2 "
        >
          {link.icon}
        </Link>
      ))}
    </div>
  )
}

export const Footer = () => {
  return (
    <footer id="contacts" className=" bg-dark">
      <Container>
        <div className="flex flex-col items-center justify-between pb-4 2xl:container lg:px-14  2xl:mx-auto">
          <Image
            className="-mt-12 w-72 lg:w-80"
            src={logo}
            alt="logo da série rick and morty"
            unoptimized
          />
          <div className="mt-10 flex w-full flex-col items-center lg:mt-0  lg:flex-row lg:justify-between 2xl:justify-around ">
            <div className="flex flex-col items-center">
              <p className="text-2xl lg:self-start">Siga-me</p>
              {generateLinksProfile()}
            </div>
            {/* <Image
              className=" lg:w-[420px] 2xl:mr-0"
              src={rickAndMorty}
              alt="rick e morty saindo de um portal"
            /> */}
            <div className="relative flex items-center justify-center overflow-hidden p-5 ">
              <Image
                className="w-80 animate-spin-slow lg:w-96"
                src={portalImage}
                alt="portal do rick and morty"
              />
              <Image
                className="absolute w-80 lg:w-96"
                src={rickAndMortyInPortal}
                alt="rick a morty"
              />
            </div>
          </div>
          <p className="mt-5 text-lg">Desenvolvido por Clécio Sousa - 2023</p>
        </div>
      </Container>
    </footer>
  )
}
