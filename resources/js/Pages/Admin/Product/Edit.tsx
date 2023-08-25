import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import ProductUpdateForm from '@/Pages/Admin/Product/Partials/UpdateForm'
import { UpdateProductSchemaType } from '@/Schemas/Admin/Product/UpdateSchema'

const title = '商品管理'

export default function ProductEdit() {
  const handleUpdateProduct = (data: UpdateProductSchemaType) => {
    console.log(data)
  }

  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <ProductUpdateForm onUpdateProduct={handleUpdateProduct} />
    </>
  )
}

ProductEdit.layout = (page: ReactNode) => <DashboardLayout children={page} />
