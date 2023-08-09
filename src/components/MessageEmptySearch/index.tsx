import { RickSvg } from '../icons/RickSvg'

export const MessageEmptySearch = () => {
  return (
    <div className=" mt-8 flex flex-col items-center justify-center">
      <RickSvg className=" animate-pulse" height={260} width={260} />
      <h2 className="my-5  text-3xl font-semibold">Burrp!</h2>
      <p className=" max-w-md text-center text-lg font-semibold tracking-wider">
        Oh, grande ideia, amigo! Procurando por um personagem que não existe?
        Parece que alguém está tropeçando em realidades paralelas novamente!
      </p>
    </div>
  )
}
