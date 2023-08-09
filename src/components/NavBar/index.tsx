'use client'
import { useState } from 'react'

import { ToggleMenu } from './ToggleMenu'
import icon from '@/assets/icon.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/favorites',
    name: 'Favoritos',
  },
  {
    href: '#',
    name: 'Contatos',
  },
]

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  console.log(pathname)

  const handleClickMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav
        className={`absolute right-0 top-0 z-20 flex h-screen w-0 justify-center overflow-hidden  bg-dark transition-all duration-300 
         md:static md:h-auto md:w-full md:bg-transparent  ${
           isOpen && ' w-full'
         }`}
      >
        <ul className="mt-20 space-y-5 text-center md:mt-0 md:flex md:flex-1 md:justify-center md:gap-20 md:space-y-0">
          {links.map((link, index) => {
            const isActive = pathname === link.href
            return (
              <li
                key={index}
                className={`rounded-lg px-4 py-2 text-xl ${
                  isActive && ' bg-secondary-dark'
                }`}
              >
                <Link onClick={() => handleClickMenu()} href={link.href}>
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <Image
        className="hidden md:block"
        src={icon}
        alt="ícone circular com rick and morty branco"
      />
      <ToggleMenu menuIsOpen={isOpen} handleClickMenu={handleClickMenu} />
    </>
  )
}
