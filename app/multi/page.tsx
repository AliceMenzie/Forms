import React, { ReactElement } from 'react'
import Layout from './layout'
import MultiForm from '@/components/Multi/MultiForm'
import type { NextPageWithLayout } from '../_app'
import StageIdentifier from '@/components/Multi/StageIdentifier'

const page: NextPageWithLayout = () => {
  return (
    <div className="md:bg-white md:p-4 md:rounded-lg md:w-[55rem] md:flex">
      <StageIdentifier />
      <MultiForm />
    </div>
  )
}

export default page

page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
