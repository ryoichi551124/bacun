import { ReactNode, memo } from 'react'
import { Head, router, usePage } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import ProductCreateForm from '@/Pages/Admin/Product/Partials/CreateForm'
import { formDataToProduct } from '@/Services/productSevice'
import type { CreateProductSchemaType } from '@/Schemas/Admin/Product/CreateSchema'

const title = '商品管理'

export default function ProductCreate() {
  const handleCreateProduct = (data: CreateProductSchemaType) => {
    const product = formDataToProduct(data)
    router.post('/admin/product/create/create', product)
  }

  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <ProductCreateForm onCreateProduct={handleCreateProduct} />
    </>
  )
}

ProductCreate.layout = (page: ReactNode) => <AdminLayout children={page} />
