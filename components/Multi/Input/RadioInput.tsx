import React, { ComponentProps } from 'react'
import type { UseFormRegister } from 'react-hook-form'
import { TMultiFormSchema } from '@/library/types'

type TextInputProps = ComponentProps<'input'> & {
  register: UseFormRegister<TMultiFormSchema>
  field: 'name' | 'email' | 'phone' | 'plan' | 'addOns' | `addOns.${number}`
}

function RadioInput({ register, field, ...rest }: TextInputProps) {
  return (
    <>
      <input
        className="w-0 peer"
        type="radio"
        {...rest}
        {...register(`${field}`)}
      />
    </>
  )
}

export default RadioInput
