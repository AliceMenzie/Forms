'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AVAILABILITY_SLOT,
  AppointmentSchema,
  type TAppointmentSchema,
  YESTERDAY_DATE,
} from '@/library/types'

function AppointmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAppointmentSchema>({ resolver: zodResolver(AppointmentSchema) })

  const onSubmit = (data: TAppointmentSchema) => {
    console.log('THIS IS SUBMIT', data)
    reset()
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap place-items-center gap-8"
    >
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="date" className="font-semibold">
          Select Appointment Date
        </label>
        <input
          aria-required
          aria-invalid={errors.date ? true : false}
          id="date"
          {...register('date')}
          type="date"
          min={format(YESTERDAY_DATE, 'yyyy-MM-dd')}
        />
        {errors.date && (
          <p
            role="alert"
            className="text-red-700 text-sm font-bold"
          >{`${errors.date.message}`}</p>
        )}
      </div>
      <fieldset
        aria-required
        aria-invalid={errors.time ? true : false}
        className="flex flex-col gap-2 my-4"
      >
        <legend className="font-semibold mb-2">
          Choose your prefered time
        </legend>
        <div className="flex gap-2">
          {AVAILABILITY_SLOT.map((time) => (
            <React.Fragment key={time}>
              <input
                type="radio"
                id={time}
                value={time}
                {...register('time')}
              />
              <label htmlFor={time}>{time}</label>
            </React.Fragment>
          ))}
        </div>
        {errors.time && (
          <p
            role="alert"
            className="text-red-700 text-sm font-bold"
          >{`${errors.time.message}`}</p>
        )}
      </fieldset>

      <input
        className="px-4 py-2 rounded-lg border bg-slate-600 text-slate-100 cursor-pointer"
        type="submit"
        value="Submit"
      />
    </form>
  )
}

export default AppointmentForm
