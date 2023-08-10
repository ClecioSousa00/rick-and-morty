import Image from 'next/image'
import { CharacterDataProps } from '@/types/dataCharactersType'
import { FavoriteButton } from '../FavoriteButton'

type CardCharacterProps = {
  data: CharacterDataProps
}

export const CardCharacter = ({ data }: CardCharacterProps) => {
  return (
    <div className="group relative h-80 w-64 ">
      <div className="absolute -inset-0.5  rounded-lg bg-border-gradient opacity-50 blur transition-all group-hover:opacity-100"></div>
      <div className=" relative flex h-full w-full flex-col rounded-3xl bg-primary px-1 ">
        <div className=" relative flex flex-1 flex-col items-center justify-between ">
          <div className="-mt-20 h-40 w-40 overflow-hidden rounded-[2.5rem]  shadow-lg shadow-secondary-dark transition-all duration-300 group-hover:scale-105">
            <Image
              src={data.image}
              alt={data.name}
              width={300}
              height={300}
              priority
              unoptimized
            />
          </div>
          <div>
            <p className=" text-center text-2xl font-medium">{data.name}</p>
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
          <div className="flex w-full items-center justify-between  px-3 pb-5">
            <div className="flex items-center gap-2  ">
              <div
                className={`h-3 w-3 rounded-full ${
                  data.status === 'Alive' ? 'bg-secondary' : 'bg-danger'
                }`}
              ></div>
              <p className="text-center text-lg">{data.status}</p>
            </div>
            <FavoriteButton character={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
