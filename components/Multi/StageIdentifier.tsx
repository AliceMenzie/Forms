'use client'
import { useActiveSectionContext } from '@/library/context/multi-form-context'
import React from 'react'

// type SectionName = 'personalInfo' | 'planType' | 'addOns' | 'finalise'

const Section = [
  { identifier: 'personalInfo', step: 'Step 1', type: 'your info' },
  { identifier: 'planType', step: 'Step 2', type: 'select plan' },
  { identifier: 'addOns', step: 'Step 3', type: 'add-ons' },
  { identifier: 'finalise', step: 'Step 4', type: 'summary' },
]

const StageIdentifier = () => {
  const { activeSection } = useActiveSectionContext()

  return (
    <div className="bg-no-repeat bg-cover bg-center bg-bg-sidebar-mobile md:bg-bg-sidebar-desktop h-40 md:h-[32rem] md:w-60 md:rounded-xl flex md:flex-col justify-center md:justify-start items-start pt-10 md:pt-6 md:pl-6 gap-6">
      {Section.map((section, index) => (
        <section className="flex gap-4" key={section.identifier}>
          <div
            className={`border flex justify-center items-center h-8 w-8 p-4 rounded-[50%] font-semibold ${
              activeSection === section.identifier
                ? 'border-[#c6dffa] bg-[#c6dffa] text-marine'
                : 'border-white text-white'
            }`}
          >
            {++index}
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-lightGray font-normal">
              {section.step.toLocaleUpperCase()}
            </p>
            <p className="text-xs text-white font-semibold tracking-widest">
              {section.type.toLocaleUpperCase()}
            </p>
          </div>
        </section>
      ))}
    </div>
  )
}

export default StageIdentifier
