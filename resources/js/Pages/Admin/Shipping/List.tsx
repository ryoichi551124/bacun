import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import ShippingListTable from '@/Pages/Admin/Shipping/Partials/ListTable'

const title = '配送管理'

/**
 * 配送先一覧ページ
 */
export default function ShippingList() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <ShippingListTable />
    </>
  )
}

ShippingList.layout = (page: ReactNode) => <AdminLayout children={page} />
