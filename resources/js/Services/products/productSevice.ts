import { CreateProductSchemaType } from '@/Schemas/Admin/Product/createSchema'
import { UpdateProductSchemaType } from '@/Schemas/Admin/Product/updateSchema'
import { Product } from '@/Types'
import type { FileData } from '@/Components/Admin/Form/Image/InputImage'

/**
 * フォームのファイルデータを取得
 */
function getFile(file: FileData[]): File | undefined {
  return file?.length > 0 && file[0].file ? file[0].file : undefined
}

/**
 * 商品フォームのデータを登録出来る形に変換
 */
export function formDataToProduct(
  data: CreateProductSchemaType | UpdateProductSchemaType,
) {
  const product = {
    category_id: data.category_id === '0' ? null : Number(data.category_id),
    name: data.name,
    // 画像は未入力ならundefined、一度入力後削除した場合は空配列となる
    thumbnail: getFile(data.thumbnail),
    main_img: getFile(data.main_img),
    sub_img1: getFile(data.sub_img1),
    sub_img2: getFile(data.sub_img2),
    sub_img3: getFile(data.sub_img3),
    sub_img4: getFile(data.sub_img4),
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

/**
 * 商品データをフォームで使える形に変換
 */
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
