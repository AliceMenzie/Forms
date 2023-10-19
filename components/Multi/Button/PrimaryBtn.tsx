import React, { ComponentProps } from 'react'

type PrimaryBtnProps = ComponentProps<'button'> & {
  children: React.ReactNode
  colour?: string
}

const PrimaryBtn = ({
  onClick,
  colour = 'bg-marine',
  children,
  ...rest
}: PrimaryBtnProps) => {
  return (
    <button
      {...rest}
      className={`${colour} font-sans h-11 w-28 text-lightGray rounded-lg text-base justify-self-end py-2 hover:${colour}/70`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
