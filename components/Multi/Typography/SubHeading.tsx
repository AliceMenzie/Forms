import React, { ComponentProps } from 'react'

type SubHeadingProps = ComponentProps<'h2'> & {
  children: React.ReactNode
}

const SubHeading = ({ children }: SubHeadingProps) => {
  return <h2 className="font-sans text-coolGray flex-1">{children}</h2>
}

export default SubHeading
