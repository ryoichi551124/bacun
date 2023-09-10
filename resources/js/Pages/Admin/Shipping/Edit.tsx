import React, { ReactNode, useState } from 'react'
import { Head, usePage, router } from '@inertiajs/react'
import axios from 'axios'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import SearchUsers from '@/Pages/Admin/Shipping/Partials/SearchUsers'
import ShippingUpdateForm from '@/Pages/Admin/Shipping/Partials/UpdateForm'
import ResultUsers from './Partials/ResultUsers'
import type { UpdateShippingSchemaType } from '@/Schemas/Admin/Shipping/updateSchema'
import type { Shipping, User } from '@/Types'
import type { SearchUsersSchemaType } from '@/Schemas/Admin/User/searchUsersSchema'

const title = '配送管理'

type ShippingData = {
  shipping: Shipping
}

/**
 * 配送先編集ページ
 */
export default function ShippingEdit() {
  const { shipping } = usePage<ShippingData>().props

  /** 配送先編集 */
  const handleUpdateShipping = (data: UpdateShippingSchemaType) => {
    router.put(`/admin/shipping/edit/update/${shipping.user_id}`, data)
  }

  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <ShippingUpdateForm onUpdateShipping={handleUpdateShipping} />
    </>
  )
}

ShippingEdit.layout = (page: ReactNode) => <AdminLayout children={page} />
