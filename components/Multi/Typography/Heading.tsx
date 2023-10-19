import React, { ComponentProps } from 'react'

type HeadingProps = ComponentProps<'h1'> & {
  children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className="font-sans text-3xl text-marine font-bold py-2">
      {children}
    </h1>
  )
}

export default Heading
