import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import DeliveryUpdateForm from '@/Pages/Admin/Delivery/Partials/UpdateForm'

const title = '送料管理'

export default function DeliveryEdit() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <DeliveryUpdateForm />
    </>
  )
}

DeliveryEdit.layout = (page: ReactNode) => <DashboardLayout children={page} />
