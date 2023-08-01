'use client'
import { useState } from 'react'

import { ToggleMenu } from './ToggleMenu'
import icon from '@/assets/icon.png'
import Image from 'next/image'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav
        className={`absolute right-0 top-0 flex h-screen w-0 justify-center overflow-hidden  bg-dark transition-all duration-300 
         md:static md:h-auto md:w-full md:bg-transparent  ${
           isOpen && ' w-full'
         }`}
      >
        <ul className="mt-20 space-y-5 text-center md:mt-0 md:flex md:flex-1 md:justify-center md:gap-20 md:space-y-0">
          <li className="text-xl">Home</li>
          <li className="text-xl">Favoritos</li>
          <li className="text-xl">Contatos</li>
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
