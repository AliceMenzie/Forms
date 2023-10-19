import AppointmentForm from '@/components/AppointmentForm'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className="text-4xl text-start pb-4">
        🗓️ Schedule <br /> Appointment
      </h1>
      <AppointmentForm />
    </div>
  )
}
