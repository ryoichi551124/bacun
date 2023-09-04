import { ReactNode } from 'react'
import { Head, router } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import ProductCreateForm from '@/Pages/Admin/Product/Partials/CreateForm'
import { formDataToProduct } from '@/Services/productSevice'
import type { CreateProductSchemaType } from '@/Schemas/Admin/Product/CreateSchema'

const title = '商品管理'

/**
 * 商品作成ページ
 */
export default function ProductCreate() {
  /** 商品作成 */
  const handleCreateProduct = (data: CreateProductSchemaType) => {
    // フォームデータを登録出来る形に変換
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
