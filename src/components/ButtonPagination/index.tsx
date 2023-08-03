'use client'
import { ButtonHTMLAttributes } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

type ButtonPaginationProps = {
  text: string
  nameIcon: 'arrowLeft' | 'arrowRight'
} & ButtonHTMLAttributes<HTMLButtonElement>

const icons = {
  arrowLeft: <FaArrowLeft />,
  arrowRight: <FaArrowRight />,
}

export const ButtonPagination = ({
  text,
  nameIcon,
  ...props
}: ButtonPaginationProps) => {
  return (
    <button
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
