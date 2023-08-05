'use client'

import { FormEvent, useState } from 'react'
import { FaSistrix } from 'react-icons/fa6'

type SearchButtonProps = {
  handleGetCharacter: (url: string) => void
}

export const Searchbutton = ({ handleGetCharacter }: SearchButtonProps) => {
  const [search, setSearch] = useState('')

  console.log(search)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('Função no search button')
    handleGetCharacter(`/character/?name=${search}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="group relative  h-14 w-full max-w-xs self-center"
    >
      <div className="absolute -inset-0.5  rounded-lg bg-border-gradient opacity-50 blur transition-all group-hover:opacity-100"></div>
      <div className=" relative flex h-full w-full  items-center justify-between  rounded-3xl bg-primary px-4">
        <input
          className=" mr-2 flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">
          <FaSistrix />
        </button>
      </div>
    </form>
  )
}
