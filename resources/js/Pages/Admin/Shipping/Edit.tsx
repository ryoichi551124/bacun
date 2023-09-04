import React, { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import ShippingUpdateForm from '@/Pages/Admin/Shipping/Partials/UpdateForm'

const title = '配送管理'

/**
 * 配送先編集ページ
 */
export default function ShippingEdit() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <ShippingUpdateForm />
    </>
  )
}

ShippingEdit.layout = (page: ReactNode) => <AdminLayout children={page} />
