import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import DeliveryCreateForm from '@/Pages/Admin/Delivery/Partials/CreateForm'

const title = '送料管理'

export default function DeliveryCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <DeliveryCreateForm />
    </>
  )
}

DeliveryCreate.layout = (page: ReactNode) => <DashboardLayout children={page} />
