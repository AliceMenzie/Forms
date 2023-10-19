import React, { ComponentProps } from 'react'
import type { UseFormRegister } from 'react-hook-form'
import { TMultiFormSchema } from '@/library/types'

type TextInputProps = ComponentProps<'input'> & {
  register: UseFormRegister<TMultiFormSchema>
  field: 'name' | 'email' | 'phone' | 'plan' | 'addOns' | `addOns.${number}`
  index: number
}

function CheckInput({ register, field, index, ...rest }: TextInputProps) {
  return (
    <>
      <input
        className="peer absolute m-4 my-8 w-[1.3rem] h-[1.3rem] rounded-3xl  accent-purplish p-4"
        type="checkbox"
        // tabIndex={index}
        role='checkbox'
        {...rest}
        {...register(`${field}`)}
      />
    </>
  )
}

export default CheckInput
