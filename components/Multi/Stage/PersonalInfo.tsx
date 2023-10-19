import React from 'react'
import TextInput from '../Input/TextInput'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { TMultiFormSchema } from '@/library/types'

type PersonalInfoProps = {
  register: UseFormRegister<TMultiFormSchema>
  errors: FieldErrors
}

function PersonalInfo({ register, errors }: PersonalInfoProps) {
  return (
    <section className="flex flex-col gap-[12px] mb-4">
      <div className="relative">
        {errors.name && (
          <p className="absolute right-0 text-strawberry text-sm font-medium">{`${errors.name.message}`}</p>
        )}
        <TextInput
          register={register}
          field="name"
          type="text"
          placeholder="e.g. Stephen King"
          isError={errors.name ? true : false}
        />
      </div>
      <div className="relative">
        {errors.email && (
          <p className="absolute right-0 text-strawberry text-sm font-medium">{`${errors.email.message}`}</p>
        )}

        <TextInput
          register={register}
          field="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          isError={errors.email ? true : false}
        />
      </div>
      <div className="relative">
        {errors.phone && (
          <p className="absolute right-0 text-strawberry text-sm font-medium">{`${errors.phone.message}`}</p>
        )}
        <TextInput
          register={register}
          field="phone"
          type="text"
          placeholder="e.g. +1 234 567 890"
          isError={errors.phone ? true : false}
        />
      </div>
    </section>
  )
}

export default PersonalInfo
