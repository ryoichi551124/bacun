import { ReactNode, memo } from 'react'
import { Head, router, usePage } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import ProductCreateForm from '@/Pages/Admin/Product/Partials/CreateForm'
import type { CreateProductSchemaType } from '@/Schemas/Admin/Product/CreateSchema'

const title = '商品管理'

export default function ProductCreate() {
  const createProduct = (data: CreateProductSchemaType) => {
    console.log(data.type)
    const product = {
      category_id: data.category_id === '0' ? null : Number(data.category_id),
      name: data.name,
      thumbnail: data.thumbnail ? data.thumbnail[0].file : null,
      main_img: data.main_img ? data.main_img[0].file : null,
      sub_img1: data.sub_img1 ? data.sub_img1[0].file : null,
      sub_img2: data.sub_img2 ? data.sub_img2[0].file : null,
      sub_img3: data.sub_img3 ? data.sub_img3[0].file : null,
      sub_img4: data.sub_img4 ? data.sub_img4[0].file : null,
      content1: data.content1,
      content2: data.content2,
      content3: data.content3,
      content4: data.content4,
      memo: data.memo,
      stock: Number(data.stock),
      type: data.type,
      status: data.status,
      tag: data.tag === '0' ? null : Number(data.tag),
      rank: null,
      regular_price: Number(data.regular_price),
      sales_price: Number(data.sales_price),
      delivery_id: data.delivery_id === '0' ? null : Number(data.delivery_id),
    }
    router.post('/admin/product/create/create', product)
  }

  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <ProductCreateForm onCreateProduct={createProduct} />
    </>
  )
}

ProductCreate.layout = (page: ReactNode) => <DashboardLayout children={page} />
