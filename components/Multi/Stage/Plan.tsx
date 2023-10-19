import React from 'react'
import Image from 'next/image'
import type {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
} from 'react-hook-form'
import { PLAN_OPTION, TMultiFormSchema } from '@/library/types'
import RadioInput from '../Input/RadioInput'
import Toggle from '../Input/Toggle'
import { formatPricing } from '@/library/utils'

type PlanInfoProps = {
  register: UseFormRegister<TMultiFormSchema>
  errors: FieldErrors
  watch: UseFormWatch<TMultiFormSchema>
}

function Plan({ register, errors, watch }: PlanInfoProps) {
  const isYearly = watch('isYearly')

  return (
    <>
      <fieldset className="md:flex md:flex-row md:justify-between">
        <legend className="sr-only">Select your prefered plan</legend>
        {PLAN_OPTION.map((option) => (
          <div className="flex flex-col " key={option}>
            <RadioInput
              id={option}
              register={register}
              field="plan"
              type="radio"
              value={option}
            />

            <label
              htmlFor={option}
              className="text-marine flex md:flex-col justify-start md:justify-around items-center md:items-start gap-4 pl-4 h-20 md:h-36 md:w-32  border rounded-md border-lightGray peer-checked:border-purplish peer-checked:bg-alabaster hover:border-purplish hover:cursor-pointer peer-focus-visible:border-purplish peer-focus-visible:border-4"
            >
              <Image
                src={`/assets/images/icon-${option}.svg`}
                width={35}
                height={35}
                alt="hello"
              />
              <div className="text-marine font-medium flex flex-col">
                {option
                  .toLowerCase()
                  .replace(/(^|\s)\S/g, (match) => match.toUpperCase())}

                <span className="text-coolGray font-normal">
                  {formatPricing(isYearly, option)}
                </span>
                {isYearly && (
                  <span className="text-marine text-sm font-normal">
                    2 months free
                  </span>
                )}
              </div>
            </label>
          </div>
        ))}
      </fieldset>

      {errors.plan && (
        <p className="pt-2 text-strawberry text-sm font-medium">{`${errors.plan.message}`}</p>
      )}
      <section className="bg-magnolia rounded py-2 mt-4 flex justify-center items-center">
        <span
          className={`mr-3 text-sm font-medium ${
            isYearly ? 'text-lightGray' : ' text-marine'
          }`}
        >
          Monthly
        </span>
        <label className="relative inline-flex items-center mr-5 cursor-pointe focus-visible:border-spacing-2 focus-visible:border-purplish ">
          <Toggle register={register} field="isYearly" />
          <div className="w-12 h-6 bg-marine rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:bottom-1 after:left-[8px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-focus-visible:bg-purplish"></div>
          <span className="ml-3 text-sm font-medium  text-lightGray peer-checked:text-marine">
            Yearly
          </span>
        </label>
      </section>
      {errors.isYearly && (
        <p className="pt-2 text-strawberry text-sm font-medium">{`${errors.isYearly.message}`}</p>
      )}
    </>
  )
}

export default Plan
