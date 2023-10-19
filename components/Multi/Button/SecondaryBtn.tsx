import React, { ComponentProps } from 'react'

type SecondaryBtnProps = ComponentProps<'button'> & {
  children: string
}

const SecondaryBtn = ({
  onClick,
  children,
  ...rest
}: SecondaryBtnProps) => {
  return (
    <button
      {...rest}
      className="font-sans h-10 w-24 text-coolGray text-start hover:text-marine hover:font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SecondaryBtn
