import { CreateProductSchemaType } from '@/Schemas/Admin/Product/CreateSchema'
import { UpdateProductSchemaType } from '@/Schemas/Admin/Product/UpdateSchema'
import { Product } from '@/Types'

export function formDataToProduct(
  data: CreateProductSchemaType | UpdateProductSchemaType,
) {
  const product = {
    category_id: data.category_id === '0' ? null : Number(data.category_id),
    name: data.name,
    // 画像は未入力ならundefined、一度入力後削除した場合は空配列となる
    thumbnail: data.thumbnail?.length > 0 ? data.thumbnail[0].file : null,
    main_img: data.main_img?.length > 0 ? data.main_img[0].file : null,
    sub_img1: data.sub_img1?.length > 0 ? data.sub_img1[0].file : null,
    sub_img2: data.sub_img2?.length > 0 ? data.sub_img2[0].file : null,
    sub_img3: data.sub_img3?.length > 0 ? data.sub_img3[0].file : null,
    sub_img4: data.sub_img4?.length > 0 ? data.sub_img4[0].file : null,
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
  return product
}

export function productToFormData(product: Product) {
  const productFormData = {
    cateogry_id: product.category_id,
    name: product.name,
    main_img: product.main_img ? [{ src: product.main_img }] : [],
    sub_img1: product.sub_img1 ? [{ src: product.sub_img1 }] : [],
    sub_img2: product.sub_img2 ? [{ src: product.sub_img2 }] : [],
    sub_img3: product.sub_img3 ? [{ src: product.sub_img3 }] : [],
    sub_img4: product.sub_img4 ? [{ src: product.sub_img4 }] : [],
    content1: product.content1,
    content2: product.content2,
    content3: product.content3,
    content4: product.content4,
    memo: product.memo,
    stock: String(product.stock),
    type: product.type,
    status: product.status,
    tag: product.tag ? String(product.tag) : '0',
    regular_price: String(product.regular_price),
    sales_price: String(product.sales_price),
    delivery_id:
      product.delivery_id === 0
        ? '0'
        : product.delivery_id === null
        ? undefined
        : String(product.delivery_id),
  }
  return productFormData
}
