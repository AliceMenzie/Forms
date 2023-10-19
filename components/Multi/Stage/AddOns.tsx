import React from 'react'
import type {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
} from 'react-hook-form'
import { ADD_ONS, TMultiFormSchema, TPlanSchema } from '@/library/types'
import CheckInput from '../Input/CheckInput'
import { camelCaseToRegularString, formatPricing } from '@/library/utils'

type AddOnsProps = {
  register: UseFormRegister<TMultiFormSchema>
  errors: FieldErrors
  getValues: UseFormGetValues<TMultiFormSchema>
}

function AddOns({ register, getValues, errors }: AddOnsProps) {
  const { isYearly } = getValues() as TPlanSchema
  return (
    <fieldset className="my-6 flex flex-col gap-4">
      <legend className="sr-only">Select your prefered add ons</legend>
      {ADD_ONS.map((item, index) => (
        <div key={item.type}>
          <CheckInput
            id={item.type}
            type="checkbox"
            value={item.type}
            register={register}
            field="addOns"
            index={index}
          />
          <label
            htmlFor={item.type}
            className="text-marine flex flex-1 justify-start items-center gap-4 pl-12 h-20 border rounded-md border-lightGray peer-checked:border-purplish peer-checked:bg-alabaster hover:border-purplish"
          >
            <div className="justify-self-start flex flex-col capitalize text-sm font-medium">
              {camelCaseToRegularString(item.type)}
              <span className="text-coolGray normal-case font-normal">
                {item.description}
              </span>
            </div>
            <div className=" text-purplish flex-1 text-right pr-4">
              +{formatPricing(isYearly, item.type)}
            </div>
          </label>
          {errors.addOns && (
            <p className="text-red-400 text-sm font-bold">{`${errors.addOns.message}`}</p>
          )}
        </div>
      ))}
    </fieldset>
  )
}

export default AddOns
