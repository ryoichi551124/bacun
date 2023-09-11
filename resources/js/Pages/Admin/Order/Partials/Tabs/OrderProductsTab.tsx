/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forms } from '@/Styles'
import { usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import searchProducts from '@/Services/products/searchProducts'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import createOrderUserSchema, {
  CreateOrderUserSchemaType,
} from '@/Schemas/Admin/Order/createOrderUserSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { userDataToOrderUser } from '@/Services/orders/orderService'
import type { SearchUsersSchemaType } from '@/Schemas/Admin/User/searchUsersSchema'
import { type User, type Pref, type UserStatus, Category } from '@/Types'

type OrderData = {
  categories: Category[]
}

export default function OrderTab() {
  const { categories } = usePage<OrderData>().props
  const [categoryId, setCategoryId] = useState<string | undefined>(
    categories && categories.length > 0
      ? categories[0].id.toString()
      : undefined,
  )

  /** カテゴリーの選択 */
  const handleSelectCategory = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    event.target.value
      ? setCategoryId(event.target.value)
      : setCategoryId(undefined)
  }

  /** カテゴリーから商品を検索 */
  const handleSearchCategoryProducts = () => {
    searchProducts(Number(categoryId)).then((res) => {
      console.log(res)
    })
  }

  return (
    <>
      {/* カテゴリー検索 */}
      {categories && categories.length > 0 ? (
        <Grid container spacing={2} css={forms.container}>
          <Grid xs={6}>
            <label htmlFor="users" css={forms.label}>
              購入する商品のカテゴリーを選ぶ
            </label>
            <select
              defaultValue={categories[0].id}
              onChange={handleSelectCategory}
              css={forms.input}
            >
              <option value="">なし</option>
              {categories.map((cateogry) => (
                <option key={cateogry.id} value={cateogry.id}>
                  {cateogry.name}
                </option>
              ))}
            </select>
          </Grid>
          <Grid xs={6}></Grid>
          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Button
              type="button"
              variant="contained"
              onClick={handleSearchCategoryProducts}
            >
              商品を検索する
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2} css={forms.container}>
          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Button
              type="button"
              variant="contained"
              onClick={handleSearchCategoryProducts}
            >
              商品を検索する
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  )
}
