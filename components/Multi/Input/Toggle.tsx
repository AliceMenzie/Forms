import React, { ComponentProps } from 'react'
import type { UseFormRegister } from 'react-hook-form'
import { TMultiFormSchema } from '@/library/types'

type ToggleProps = ComponentProps<'input'> & {
  register: UseFormRegister<TMultiFormSchema>
  field:
    | 'name'
    | 'email'
    | 'phone'
    | 'plan'
    | 'addOns'
    | `addOns.${number}`
    | 'isYearly'
}

function Toggle({ register, field, ...rest }: ToggleProps) {
  return (
    <>
      <input
        tabIndex={0}
        className="sr-only peer"
        type="checkbox"
        {...rest}
        {...register(`${field}`)}
      />
    </>
  )
}

export default Toggle
