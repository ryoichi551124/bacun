import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import ProductCreateForm from '@/Pages/Admin/Product/Partials/CreateForm'

const title = '商品管理'

export default function ProductCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <ProductCreateForm />
    </>
  )
}

ProductCreate.layout = (page: ReactNode) => <DashboardLayout children={page} />
