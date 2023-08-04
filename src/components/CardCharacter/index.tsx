import Image from 'next/image'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import { CharacterDataProps } from '@/types/dataCharactersType'

type CardCharacterProps = {
  data: CharacterDataProps
}

export const CardCharacter = ({ data }: CardCharacterProps) => {
  return (
    <div className="group relative  h-80 w-64 ">
      <div className="absolute -inset-0.5  rounded-lg bg-border-gradient opacity-50 blur transition-all group-hover:opacity-100"></div>
      <div className=" relative flex h-full w-full flex-col  rounded-3xl bg-primary ">
        <div className=" relative flex flex-1 flex-col items-center justify-center ">
          <div className="absolute -top-20 h-40 w-40 overflow-hidden rounded-[2.5rem]  shadow-lg shadow-secondary-dark transition-all duration-300 group-hover:scale-105">
            <Image
              src={data.image}
              alt="a"
              width={300}
              height={300}
              priority
              unoptimized={true}
            />
          </div>
          <div className="mt-[4.75rem] space-y-1 ">
            <p className="text-center text-3xl font-medium">{data.name}</p>
            <p className="text-center text-xl">
              Espécie:{' '}
              <span className="text-lg font-medium">{data.species}</span>
            </p>
            <p className="text-center text-lg">
              Gênero: <span className="text-lg font-medium">{data.gender}</span>
            </p>
            <p className="text-center text-lg">
              Origen:{' '}
              <span className="text-lg font-medium">{data.origin.name}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between px-3 pb-5">
          <div className="flex items-center gap-2  ">
            <div
              className={`h-3 w-3 rounded-full ${
                data.status === 'Alive' ? 'bg-secondary' : 'bg-danger'
              }`}
            ></div>
            <p className="text-center text-lg">{data.status}</p>
          </div>
          <button className="cursor-pointer ">
            <FaRegHeart size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
