'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CommentFormSchema, type TCommentFormSchema } from '@/library/types'

export default function AddCommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TCommentFormSchema>({ resolver: zodResolver(CommentFormSchema) })

  const onSubmit = (data: TCommentFormSchema) => {
    const formData = new FormData()
    console.log('THIS IS data', data)
    data.attachment && formData.append('attachment', data.attachment[0])
    formData.append('comment', data.message)

    // // Todo connect to server
    console.log('THIS IS FORM DATA', [...formData])
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2"
      encType="multipart/form-data"
    >
      <label className="font-medium" htmlFor="message">
        message
      </label>
      <textarea
        className="px-4 py-2 rounded-lg border"
        id="message"
        {...register('message')}
        placeholder="type your message here"
      />
      {errors.message && (
        <p className="text-red-700 text-sm font-bold">{`${errors.message.message}`}</p>
      )}
      <label className="font-medium" htmlFor="attachment">
        attachment
      </label>
      <input {...register('attachment')} type="file" />

      {errors.attachment && (
        <p className="text-red-700 text-sm font-bold">{`${errors.attachment.message}`}</p>
      )}
      <input
        type="submit"
        className="px-4 py-2 rounded-lg border bg-slate-600 text-slate-100 cursor-pointer"
        value={isSubmitting ? 'Submitting ...' : 'Submit'}
      />
    </form>
  )
}
