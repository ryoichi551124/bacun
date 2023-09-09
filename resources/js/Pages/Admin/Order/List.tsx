import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import OrderListTable from '@/Pages/Admin/Order/Partials/ListTable'

const title = '受注管理'

/**
 * 受注一覧ページ
 */
export default function OrderList() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <OrderListTable />
    </>
  )
}

OrderList.layout = (page: ReactNode) => <AdminLayout children={page} />
