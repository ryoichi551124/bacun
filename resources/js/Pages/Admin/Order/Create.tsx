import React, { ReactNode, useState } from 'react'
import { Head, router, usePage } from '@inertiajs/react'
import axios from 'axios'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import CreateTabs from '@/Pages/Admin/Order/Partials/CreateTabs'

const title = '受注登録'

export default function OrderCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <CreateTabs />
    </>
  )
}

OrderCreate.layout = (page: ReactNode) => <AdminLayout children={page} />
