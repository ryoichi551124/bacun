import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import DeliveryListTable from '@/Pages/Admin/Delivery/Partials/ListTable'

const title = '送料管理'

export default function DeliveryList() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <DeliveryListTable />
    </>
  )
}

DeliveryList.layout = (page: ReactNode) => <DashboardLayout children={page} />
