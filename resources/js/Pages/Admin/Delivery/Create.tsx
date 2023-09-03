import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import DeliveryCreateForm from '@/Pages/Admin/Delivery/Partials/CreateForm'

const title = '送料管理'

/**
 * 送料作成ページ
 */
export default function DeliveryCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <DeliveryCreateForm />
    </>
  )
}

DeliveryCreate.layout = (page: ReactNode) => <AdminLayout children={page} />
