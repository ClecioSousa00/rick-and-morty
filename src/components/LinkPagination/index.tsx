'use client'

import Link, { LinkProps } from 'next/link'
import { ButtonHTMLAttributes } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

type LinkPaginationProps = {
  text: string
  nameIcon: 'arrowLeft' | 'arrowRight'
} & LinkProps

const icons = {
  arrowLeft: <FaArrowLeft />,
  arrowRight: <FaArrowRight />,
}

export const LinkPagination = ({
  text,
  nameIcon,
  ...props
}: LinkPaginationProps) => {
  return (
    <Link
      className={`flex h-14 w-full max-w-[180px] items-center justify-center gap-4 rounded-lg bg-secondary-dark text-xl ${
        nameIcon === 'arrowRight' ? 'flex-row-reverse' : ''
      }`}
      {...props}
    >
      {icons[nameIcon]}
      {text}
    </Link>
  )
}
