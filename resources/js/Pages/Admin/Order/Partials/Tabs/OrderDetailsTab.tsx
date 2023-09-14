/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forms } from '@/Styles'
import { usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import searchProducts from '@/Services/products/searchProducts'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import createOrderUserSchema, {
  CreateOrderUserSchemaType,
} from '@/Schemas/Admin/Order/createOrderUserSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { userDataToOrderUser } from '@/Services/orders/orderService'
import { productToOrderDetail } from '@/Services/orders/orderService'
import type { Category, Product, OrderDetail } from '@/Types'

const flex = css`
  display: flex;
  align-items: center;
`
const quantitySelect = css`
  width: 50%;
  margin-right: -1rem;
  margin-left: 1rem;
`

type OrderData = {
  categories: Category[]
}
type OrderDetailsTabProps = {
  orderDetails: OrderDetail[]
  setOrderDetails: React.Dispatch<React.SetStateAction<OrderDetail[]>>
}

/**
 * 最大10個まで商品の個数を選択できる配列を作る
 */
const createProductQuantityArray = (product: Product): number[] => {
  if (product) {
    return product.stock > 10
      ? [...Array(11).keys()].slice(1)
      : [...Array(product.stock + 1).slice(1)]
  }
  return []
}

export default function OrderDetailsTab({
  orderDetails,
  setOrderDetails,
}: OrderDetailsTabProps) {
  const { categories } = usePage<OrderData>().props
  const [categoryId, setCategoryId] = useState<string | undefined>(
    categories && categories.length > 0
      ? categories[0].id.toString()
      : undefined,
  )
  const [products, setProducts] = useState<Product[] | undefined>(undefined)
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [quantityArray, setQuantityArray] = useState<number[]>([])
  const [quantity, setQuantity] = useState<number>(1)

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
      if (res) {
        setProducts(res)
        setProduct(res[0])
        res && setQuantityArray(createProductQuantityArray(res[0]))
      } else {
        setProducts([])
        setProduct(undefined)
        setQuantityArray([])
      }
    })
  }

  /** 購入する商品を選択 */
  const handleSelectProduct = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.value &&
      setProduct(
        products?.filter(
          (product) => product.id === Number(event.target.value),
        )[0],
      )
    product && setQuantityArray(createProductQuantityArray(product))
  }

  /** 購入する商品の個数を選択 */
  const handleSelectQuantity = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    event.target.value && setQuantity(Number(event.target.value))
  }

  /** 商品の追加 */
  const handleAddOrderDetails = () => {
    // 追加商品
    const orderDetail = product && productToOrderDetail(product, quantity)
    // 空なら追加
    orderDetail && orderDetails.length === 0 && setOrderDetails([orderDetail])
    // 同じのがあれば個数追加
    if (orderDetail && orderDetails.length > 0) {
      let isExistOrder = false
      orderDetails.map((detail) => {
        if (detail.product_id === orderDetail.product_id) {
          detail.quantity += orderDetail.quantity
          isExistOrder = true
        }
      })
      isExistOrder
        ? setOrderDetails(orderDetails)
        : setOrderDetails(orderDetails.concat([orderDetail]))
    }
  }

  return (
    <>
      {/* カテゴリー検索 */}
      {categories && categories.length > 0 ? (
        <Grid container spacing={2} css={forms.container}>
          <Grid xs={6}>
            <label htmlFor="users" css={forms.label}>
              商品のカテゴリーを選ぶ
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
      <hr />

      {/* 商品選択 */}
      {products && products.length > 0 && (
        <Grid container spacing={2} css={forms.container}>
          <Grid xs={9}>
            <label htmlFor="users" css={forms.label}>
              購入する商品を選ぶ
            </label>
            <div css={flex}>
              <select
                defaultValue={products[0].id}
                onChange={handleSelectProduct}
                css={forms.input}
              >
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
              {product && (
                <select
                  defaultValue={quantity}
                  onChange={handleSelectQuantity}
                  css={[forms.input, quantitySelect]}
                >
                  {quantityArray.length > 0 ? (
                    quantityArray.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))
                  ) : (
                    <option value={0}>在庫切れ</option>
                  )}
                </select>
              )}
            </div>
          </Grid>
          <Grid xs={3}></Grid>
          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Button
              type="button"
              variant="contained"
              onClick={handleAddOrderDetails}
            >
              商品を追加
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  )
}
