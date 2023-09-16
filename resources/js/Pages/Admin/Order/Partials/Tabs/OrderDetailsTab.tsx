/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forms } from '@/Styles'
import { usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Stores'
import { updateOrderQuantity, setOrderDetails } from '@/Stores/orderTemp'
import searchProducts from '@/Services/products/searchProducts'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Button } from '@mui/material'
import {
  productToOrderDetail,
  makeQuantityArray,
} from '@/Services/orders/orderService'
import OrderPreviewTable from '@/Pages/Admin/Order/Partials/Tabs/OrderPreviewTable'
import type { Category, Product } from '@/Types'

const flex = css`
  display: flex;
  align-items: center;
`
const quantitySelect = css`
  width: 50%;
  margin-right: -1rem;
  margin-left: 1rem;
`
const marginFix = css`
  margin-top: 0.5rem;
  margin-bottom: 0;
`

type OrderData = {
  categories: Category[]
}

export default function OrderDetailsTab() {
  const { categories } = usePage<OrderData>().props
  const [categoryId, setCategoryId] = useState<string | undefined>(undefined)
  const [products, setProducts] = useState<Product[] | undefined>(undefined)
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [quantityArray, setQuantityArray] = useState<number[]>([])
  const [quantity, setQuantity] = useState<number>(1)

  const { orderDetails } = useSelector(
    (state: RootState) => state.orderTempReducer,
  )
  const dispatch = useDispatch()

  /** カテゴリーの選択 */
  const handleSelectCategory = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    event.target.value
      ? setCategoryId(event.target.value)
      : setCategoryId(undefined)
  }

  /** カテゴリーの商品を検索 */
  const handleSearchCategoryProducts = () => {
    searchProducts(Number(categoryId)).then((res) => {
      if (res) {
        setProducts(res)
        setProduct(res[0])
        res && setQuantityArray(makeQuantityArray(res[0].stock))
      } else {
        setProducts([])
        setProduct(undefined)
        setQuantityArray([])
      }
    })
  }

  /** 購入する商品を選択 */
  const handleSelectProduct = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProduct(
      products?.filter(
        (product) => product.id === Number(event.target.value),
      )[0],
    )
    product && setQuantityArray(makeQuantityArray(product.stock))
  }

  /** 購入する商品の個数を選択 */
  const handleSelectQuantity = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setQuantity(Number(event.target.value))
  }

  /** 商品の追加 */
  const handleAddOrderDetails = () => {
    // 追加商品
    const addOrder = product && productToOrderDetail(product, quantity)
    // 商品配列が空なら追加
    addOrder &&
      orderDetails.length === 0 &&
      dispatch(setOrderDetails([addOrder]))
    // 同じのがあれば個数追加、無ければ商品配列に追加
    if (addOrder && orderDetails.length > 0) {
      let isExistOrder = false
      const newOrderDetails = orderDetails.map((order, index) => {
        if (order.product_id === addOrder.product_id) {
          dispatch(
            updateOrderQuantity({
              index: index,
              quantity: order.quantity + addOrder.quantity,
            }),
          )
          isExistOrder = true
        }
        return order
      })
      isExistOrder === false &&
        dispatch(setOrderDetails(newOrderDetails.concat([addOrder])))
    }
  }

  return (
    <>
      {/* カテゴリー検索 */}
      {categories && categories.length > 0 ? (
        <Grid container spacing={2} css={[forms.container, marginFix]}>
          <Grid xs={6}>
            <label htmlFor="users" css={forms.label}>
              商品のカテゴリーを選ぶ
            </label>
            <select onChange={handleSelectCategory} css={forms.input}>
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
        <Grid container spacing={2} css={[forms.container, marginFix]}>
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
      <hr />

      {/* 購入商品の表示 */}
      <OrderPreviewTable />
    </>
  )
}
