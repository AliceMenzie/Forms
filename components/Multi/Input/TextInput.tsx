import React, { ComponentProps } from 'react'
import type { UseFormRegister } from 'react-hook-form'
import { TMultiFormSchema } from '@/library/types'

type TextInputProps = ComponentProps<'input'> & {
  register: UseFormRegister<TMultiFormSchema>
  field: 'name' | 'email' | 'phone' | 'plan' | 'addOns' | `addOns.${number}`
  isError: boolean
}

function TextInput({ register, field, isError, ...rest }: TextInputProps) {
  return (
    <div className="font-sans flex flex-col">
      <label className="text-marine">{field}</label>
      <input
        className={`h-10 border rounded pl-4 placeholder:font-medium text-base ${
          isError ? 'border-strawberry' : 'border-coolGray/30'
        }`}
        type="text"
        {...rest}
        {...register(`${field}`)}
      />
    </div>
  )
}

export default TextInput
