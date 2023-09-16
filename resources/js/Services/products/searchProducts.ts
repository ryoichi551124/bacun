import axios from 'axios'
import type { Product } from '@/Types'

/**
 * カテゴリーIDによる商品検索
 * undefinedであれば全て取得
 */
export default async function searchProducts(
  categoryId: number,
): Promise<Product[] | undefined> {
  try {
    const res = await axios.post('/admin/api/product/search', {
      category_id: categoryId,
    })
    return res.data
  } catch (err) {
    console.log(err)
  }
}
