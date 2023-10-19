'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  SectionName,
  TMultiFormSchema,
  formStageOptions,
} from '@/library/types'
import { useActiveSectionContext } from '@/library/context/multi-form-context'
import PrimaryBtn from './Button/PrimaryBtn'
import SecondaryBtn from './Button/SecondaryBtn'
import Heading from './Typography/Heading'
import SubHeading from './Typography/SubHeading'

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  plan: '',
  isYearly: false,
  addOns: [],
}

function MultiForm() {
  const { activeSection, setActiveSection } = useActiveSectionContext()
  const keys = Object.keys(formStageOptions)
  const currentIndex = keys.indexOf(activeSection)

  const CurrentComponent = formStageOptions[activeSection].component
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm<TMultiFormSchema>({
    resolver: zodResolver(formStageOptions[activeSection].schema),
    mode: 'onChange',
    defaultValues,
  })

  const onSubmit = (data: TMultiFormSchema) => {
    console.log('form is being submitted...', data)
    reset()
    setActiveSection('personalInfo')
  }

  const handleNextStage = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    const isStepValid = await trigger()

    if (isStepValid) {
      const keys = Object.keys(formStageOptions) as SectionName[]

      const currentIndex = keys.indexOf(activeSection)
      if (currentIndex !== 3) {
        setActiveSection(keys[currentIndex + 1])
      }
    }
  }
  const handleBackStage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()

    if (currentIndex == 0) {
      setActiveSection(keys[currentIndex] as SectionName)
    }
    if (currentIndex !== 0) {
      setActiveSection(keys[currentIndex - 1] as SectionName)
    }
  }

  return (
    <>
      <form className="flex flex-col md:w-[75%]">
        <div className="absolute md:static top-24 bg-white min-h-[24rem] w-[355px] md:w-full rounded-xl flex flex-col justify-between md:justify-between self-center md:self-start py-4 px-6 md:px-20">
          <section>
            <Heading>{formStageOptions[activeSection].heading}</Heading>
            <SubHeading>
              {formStageOptions[activeSection].subHeading}
            </SubHeading>
          </section>
          <CurrentComponent
            watch={watch}
            getValues={getValues}
            register={register}
            errors={errors}
          />
        </div>
        <section
          className={`absolute bottom-0 right-0 md:static px-6 bg-white w-full self-end h-16 flex items-center md:px-20 ${
            activeSection !== 'personalInfo' ? 'justify-between' : 'justify-end'
          }`}
        >
          {activeSection !== 'personalInfo' ? (
            <SecondaryBtn onClick={handleBackStage}> Go Back</SecondaryBtn>
          ) : null}
          {activeSection !== 'finalise' ? (
            <PrimaryBtn onClick={handleNextStage}>Next Step</PrimaryBtn>
          ) : null}
          {activeSection === 'finalise' ? (
            <PrimaryBtn onClick={handleSubmit(onSubmit)} colour="bg-purplish">
              Confirm
            </PrimaryBtn>
          ) : null}
        </section>
      </form>
    </>
  )
}

export default MultiForm
