import { FaSistrix } from 'react-icons/fa6'
export const Searchbutton = () => {
  return (
    <div className="group relative  h-14 w-full max-w-xs self-center">
      <div className="absolute -inset-0.5  rounded-lg bg-border-gradient opacity-50 blur transition-all group-hover:opacity-100"></div>
      <div className=" relative flex h-full w-full  items-center justify-between  rounded-3xl bg-primary px-4">
        <input
          className=" mr-2 flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Buscar..."
        />
        <FaSistrix />
      </div>
    </div>
  )
}
