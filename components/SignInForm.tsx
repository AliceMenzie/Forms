'use client'
import React from 'react'
import { type FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInFormSchema, type TSignInFormSchema } from '@/library/types'

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignInFormSchema>({
    resolver: zodResolver(SignInFormSchema),
  })

  const onSubmit = (data: TSignInFormSchema) => {
    // Todo connect to server
    console.log('THIS IS FORM DATA', data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex flex-col gap-y-2">
        <legend className="sr-only">Sign up information</legend>
        <label htmlFor="email">
          Email <span className="text-red-700">*</span>
        </label>
        <input
          aria-required
          aria-invalid={errors.email ? true : false}
          id="email"
          {...register('email')}
          type="email"
          placeholder="example@email.com"
          className={`px-4 py-2 rounded-sm  ${
            errors.email ? 'border-2 border-red-700 ' : 'border'
          } `}
        />

        {errors.email && (
          <p
            role="alert"
            aria-live="assertive"
            className="text-red-700 text-sm font-bold"
          >
            Error: {`${errors.email.message}`}
          </p>
        )}
        <label htmlFor="password">
          Password <span className="text-red-700">*</span>{' '}
        </label>
        <input
          aria-required
          aria-invalid={errors.password ? true : false}
          id="password"
          {...register('password')}
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded-sm border"
        />
        {errors.password && (
          <p
            role="alert"
            aria-live="assertive"
            className="text-red-700 text-sm font-bold"
          >{`${errors.password.message}`}</p>
        )}
        <label htmlFor="confirmPassword">
          Confirm Password <span className="text-red-700">*</span>
        </label>
        <input
          aria-required
          aria-invalid={errors.confirmPassword ? true : false}
          id="confirmPassword"
          {...register('confirmPassword')}
          type="password"
          placeholder="Confirm Password"
          className="px-4 py-2 rounded-sm border"
        />
        {errors.confirmPassword && (
          <p
            role="alert"
            aria-live="assertive"
            className="text-red-700 text-sm font-bold"
          >{`${errors.confirmPassword.message}`}</p>
        )}
        <input
          type="submit"
          className="px-4 py-2 rounded-sm border bg-slate-600 text-slate-100 cursor-pointer"
          value={isSubmitting ? 'Submitting ...' : 'Submit'}
        />
      </fieldset>
    </form>
  )
}

export default SignInForm
