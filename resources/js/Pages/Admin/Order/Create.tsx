import React, { ReactNode, useState } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import CreateOrderTabs from '@/Pages/Admin/Order/Partials/CreateOrderTabs'
import ConfirmOrder from '@/Pages/Admin/Order/Partials/ConfirmOrder'

const title = '受注登録'

export default function OrderCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <CreateOrderTabs />
      <ConfirmOrder />
    </>
  )
}

OrderCreate.layout = (page: ReactNode) => <AdminLayout children={page} />
