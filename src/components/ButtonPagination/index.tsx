'use client'
import { ButtonHTMLAttributes } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

type ButtonPaginationProps = {
  text: string
  nameIcon: 'arrowLeft' | 'arrowRight'
  handleClickPagination: (url: string) => void
  url: string
} & ButtonHTMLAttributes<HTMLButtonElement>
const icons = {
  arrowLeft: <FaArrowLeft />,
  arrowRight: <FaArrowRight />,
}

export const ButtonPagination = ({
  text,
  nameIcon,
  handleClickPagination,
  url,
  ...props
}: ButtonPaginationProps) => {
  return (
    <div className="group relative h-14 w-full max-w-[180px]">
      <div className="absolute -inset-0.5  rounded-lg bg-border-gradient opacity-50 blur transition-all group-hover:opacity-100"></div>
      <button
        onClick={() => handleClickPagination(url)}
        className={`relative flex h-full w-full items-center justify-center gap-4 rounded-lg
         bg-primary text-xl
        ${nameIcon === 'arrowRight' ? 'flex-row-reverse' : ''}`}
        {...props}
      >
        {icons[nameIcon]}
        {text}
      </button>
    </div>
  )
}
