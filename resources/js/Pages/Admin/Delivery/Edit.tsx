import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import DeliveryUpdateForm from '@/Pages/Admin/Delivery/Partials/UpdateForm'

const title = '送料管理'

/**
 * 送料編集ページ
 */
export default function DeliveryEdit() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <DeliveryUpdateForm />
    </>
  )
}

DeliveryEdit.layout = (page: ReactNode) => <AdminLayout children={page} />
