import ActiveSectionContextProvider from '@/library/context/multi-form-context'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter, Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  style: 'normal',
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'Frontend Mentor Challenge',
  description: 'Form Examples using Zod',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${ubuntu.className} bg-slate-100 flex flex-col justify-between md:flex-row min-h-screen min-w-full md:items-center md:justify-center md:gap-y-2 md:p-24`}
    >
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </div>
  )
}
