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
    <button
      onClick={() => handleClickPagination(url)}
      className={`flex h-14 w-full max-w-[180px] items-center justify-center gap-4 rounded-lg bg-secondary-dark text-xl ${
        nameIcon === 'arrowRight' ? 'flex-row-reverse' : ''
      }`}
      {...props}
    >
      {icons[nameIcon]}
      {text}
    </button>
  )
}
