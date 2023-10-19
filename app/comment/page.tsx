import AddCommentForm from '@/components/AddCommentForm'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className="text-4xl text-center pb-8">💬 Comment</h1>
      <AddCommentForm />
    </div>
  )
}
