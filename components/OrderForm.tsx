'use client'
import { type TOrderFormSchema, OrderFormSchema } from '@/library/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

const PIZZA_BASE_OPTIONS = ['thin crust', 'thick crust', 'gluten free']
const PIZZA_SAUCE_OPTIONS = ['white', 'red']
const PIZZA_TOPPINGS_OPTIONS = [
  'pineapple',
  'capsicum',
  'onion',
  'olvies',
  'mushrooms',
  'spinach',
  'bacon',
  'ham',
  'sopressa',
  'chicken',
]
const PIZZA_CHEESE_OPTIONS = ['mozarella', 'feta', 'none']
const DELIVERY_SLOT = ['Now', '10:00 am', '12:00 am', '1:00 pm', '2:00 pm']

function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TOrderFormSchema>({ resolver: zodResolver(OrderFormSchema) })

  const onSubmit = (data: TOrderFormSchema) => {
    console.log('THIS IS DATA', data)
    reset()
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 "
      >
        <fieldset
          aria-required
          aria-invalid={errors.base ? true : false}
          className="flex gap-x-4"
        >
          <legend className="font-bold">Base Options</legend>
          {PIZZA_BASE_OPTIONS.map((option) => (
            <section key={option}>
              <input
                id={option}
                {...register('base')}
                type="radio"
                value={option}
              />
              <label htmlFor={option}>
                {option
                  .toLowerCase()
                  .replace(/(^|\s)\S/g, (match) => match.toUpperCase())}
              </label>
            </section>
          ))}
        </fieldset>
        {errors.base && (
          <p
            role="alert"
            className="text-red-700 text-sm font-bold"
          >{`${errors.base.message}`}</p>
        )}
        <fieldset
          aria-required
          aria-invalid={errors.sauce ? true : false}
          className="flex gap-x-4"
        >
          <legend className="font-bold">Sauce Options</legend>
          {PIZZA_SAUCE_OPTIONS.map((option) => (
            <section key={option}>
              <input
                id={option}
                {...register('sauce')}
                type="radio"
                value={option}
              />
              <label htmlFor={option}>
                {option
                  .toLowerCase()
                  .replace(/(^|\s)\S/g, (match) => match.toUpperCase())}
              </label>
            </section>
          ))}
        </fieldset>
        {errors.sauce && (
          <p
            role="alert"
            className="text-red-700 text-sm font-bold"
          >{`${errors.sauce.message}`}</p>
        )}
        <fieldset>
          <legend className="font-bold">Topping Options</legend>
          <section className="grid grid-cols-3">
            {PIZZA_TOPPINGS_OPTIONS.map((time) => (
              <section key={time} className="flex gap-1">
                <input
                  type="checkbox"
                  id={time}
                  value={time}
                  {...register('topping')}
                />
                <label htmlFor={time}>{time}</label>
              </section>
            ))}
          </section>
          {errors.topping && (
            <p
              role="alert"
              className="text-red-700 text-sm font-bold"
            >{`${errors.topping.message}`}</p>
          )}
        </fieldset>
        <section className="flex flex-col">
          <label htmlFor="delivery" className="font-bold">
            Delivery Option
          </label>
          <select
            aria-required
            aria-invalid={errors.delivery ? true : false}
            id="delivery"
            {...register('delivery')}
            placeholder="delivery"
          >
            <option id="time" value="">
              Please choose a delivery time
            </option>
            {DELIVERY_SLOT.map((time) => (
              <React.Fragment key={time}>
                <option value={time}>{time}</option>
              </React.Fragment>
            ))}
          </select>
        </section>
        {errors.delivery && (
          <p
            role="alert"
            className="text-red-700 text-sm font-bold"
          >{`${errors.delivery.message}`}</p>
        )}
        <input
          type="submit"
          className="px-4 py-2 rounded-sm border bg-slate-600 text-slate-100 cursor-pointer"
          value={isSubmitting ? 'Ordering ...' : 'Order'}
        />
      </form>
    </>
  )
}

export default OrderForm
