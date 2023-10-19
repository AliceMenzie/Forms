import { useActiveSectionContext } from '@/library/context/multi-form-context'
import { PRICING, TFinaliseSchema, TMultiFormSchema } from '@/library/types'
import {
  calcTotal,
  camelCaseToRegularString,
  capitaliseFirst,
  formatPricing,
} from '@/library/utils'
import React from 'react'
import type {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
} from 'react-hook-form'

type FinaliseInfoProps = {
  errors: FieldErrors
  getValues: UseFormGetValues<TMultiFormSchema>
}

function Finalise({ errors, getValues }: FinaliseInfoProps) {
  const { setActiveSection } = useActiveSectionContext()
  console.log('THIS IS getValues()', getValues())
  const { plan, addOns, isYearly } = getValues() as TFinaliseSchema
  console.log(typeof addOns)
  return (
    <div className="flex-1 my-4">
      <section className="bg-magnolia rounded-lg px-4 py-2">
        <div className="flex justify-between py-2 border-b border-lightGray">
          <div>
            <p className="text-marine font-bold">
              {capitaliseFirst(plan)} {isYearly ? '(Monthly)' : '(Yearly)'}
            </p>
            <button
              onClick={() => setActiveSection('planType')}
              className="text-coolGray underline underline-offset-1 hover:text-purplish"
            >
              Change
            </button>
          </div>
          <div className="text-marine font-bold self-center">
            {formatPricing(isYearly, plan)}
          </div>
        </div>
        <div className="py-2 flex flex-col gap-2">
          {addOns.length >= 1 &&
            addOns.map((addOn) => (
              <React.Fragment key={addOn}>
                <div className="text-coolGray flex justify-between capitalize">
                  {camelCaseToRegularString(addOn)}
                  <span className="text-marine normal-case">
                    +{formatPricing(isYearly, addOn)}
                  </span>
                </div>
              </React.Fragment>
            ))}
        </div>
      </section>
      <div className="text-coolGray p-4 flex justify-between">
        Total {isYearly ? '(per year)' : '(per month)'}
        <span className="text-purplish font-bold">
          +{calcTotal(isYearly, plan, addOns)}
        </span>
      </div>
    </div>
  )
}

export default Finalise
