import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  style: 'normal',
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'Form Examples',
  description: 'Form Examples using Zod',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <main className="bg-slate-100flex flex-col justify-between md:flex-row min-h-screen min-w-screen md:items-center md:justify-center md:gap-y-2">
          {children}
        </main>
      </body>
    </html>
  )
}
