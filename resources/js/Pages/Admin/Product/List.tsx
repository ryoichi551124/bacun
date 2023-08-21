import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import ProductListTable from '@/Pages/Admin/Product/Partials/ListTable'

const title = '商品管理'

export default function ProductList() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <ProductListTable />
    </>
  )
}

ProductList.layout = (page: ReactNode) => <DashboardLayout children={page} />
