import Image from 'next/image'
import rickImage from '@/assets/rickImage.png'

export const MessageEmptySearch = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <Image
        className="w-60"
        src={rickImage}
        alt="Imagen do rosto do rick de cor cinza"
      />
      <h2 className="mb-5 mt-10 text-3xl font-semibold">Burrp! </h2>
      <p className=" max-w-md text-center text-xl font-semibold">
        Oh, grande ideia, amigo! Procurando por um personagem que não existe?
        Parece que alguém está tropeçando em realidades paralelas novamente!
      </p>
    </div>
  )
}
