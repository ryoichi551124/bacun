import { ReactNode } from 'react'
import { Head, usePage, router } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import ProductUpdateForm from '@/Pages/Admin/Product/Partials/UpdateForm'
import { UpdateProductSchemaType } from '@/Schemas/Admin/Product/UpdateSchema'
import { formDataToProduct } from '@/Services/products/productSevice'
import type { Product } from '@/Types'

const title = '商品管理'

type ProductData = {
  product: Product
}

/**
 * 商品編集ページ
 */
export default function ProductEdit() {
  const id = usePage<ProductData>().props.product.id

  /** 商品の編集 */
  const handleUpdateProduct = (data: UpdateProductSchemaType) => {
    // フォームデータを登録出来る形に変換
    const product = formDataToProduct(data)
    // ファイルを含むPUTメソッドの場合はPOST送信で_methodを指定する
    router.post(`/admin/product/edit/update/${id}`, {
      _method: 'put',
      ...product,
    })
  }

  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <ProductUpdateForm onUpdateProduct={handleUpdateProduct} />
    </>
  )
}

ProductEdit.layout = (page: ReactNode) => <AdminLayout children={page} />
