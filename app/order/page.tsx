import OrderForm from '@/components/OrderForm'
import React from 'react'

function page() {
  return (
    <div>
      <h1 className="text-4xl  text-center pb-8">🍕 Place Order</h1>
      <OrderForm />
    </div>
  )
}

export default page
