/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { usePage, router } from '@inertiajs/react'
import { useSelector } from 'react-redux'
import { RootState } from '@/Stores'
import { colors, forms, fontSizes } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Button from '@mui/material/Button'
import type { Pref } from '@/Types'

const title = css`
  padding: 0.5rem 0;
  font-size: ${fontSizes.sm};
  font-weight: bold;
  border-bottom: 1px solid ${colors.gray};
`
const flex = css`
  display: flex;
  padding-top: 0.5rem;
`
const lead = css`
  width: 30%;
`
const content = css`
  width: 70%;
  padding-left: 1rem;
`
const noContent = css`
  padding-top: 0.5rem;
  color: ${colors.error};
`
const disableButton = css`
  background: ${colors.gray};
  pointer-events: none;
`

type OrderData = {
  prefs: Pref
}

export default function ConfirmOrder() {
  const { prefs } = usePage<OrderData>().props
  const [subTotal, setSubTotal] = useState<number>(0)
  // 注文者、配送先、購入商品
  const { userId, orderUser, orderShipping, orderDetails } = useSelector(
    (state: RootState) => state.orderTempReducer,
  )

  // 小計の計算
  useEffect(() => {
    let newSubTotal: number = 0
    orderDetails.forEach((order) => {
      newSubTotal += order.price * order.quantity
    })
    setSubTotal(newSubTotal)
  }, [orderDetails])

  const handleCreateOrder = async () => {
    router.post('/admin/order/create/create', {
      user_id: userId,
      order_user: orderUser,
      order_shipping: orderShipping,
      orderDetails,
    })
  }
  console.log(userId)

  return (
    <Card title="受注確認・登録">
      <Grid container spacing={4} css={forms.container}>
        {/* 注文者 */}
        <Grid xs={6}>
          <div css={title}>注文者</div>
          {orderUser ? (
            <>
              <div css={flex}>
                <div css={lead}>名前</div>
                <div css={content}>
                  {orderUser.last_name} {orderUser.first_name}
                </div>
              </div>
              <div css={flex}>
                <div css={lead}>フリガナ</div>
                <div css={content}>
                  {orderUser.last_kana} {orderUser.first_kana}
                </div>
              </div>
              <div css={flex}>
                <div css={lead}>住所</div>
                <div css={content}>
                  <div>
                    〒:{orderUser.zip_code1}-{orderUser.zip_code2}
                  </div>
                  <div>
                    {prefs[Number(orderUser.pref)]}
                    {orderUser.city}
                    {orderUser.address}
                    <br />
                    {orderUser.building}
                  </div>
                </div>
              </div>
              <div css={flex}>
                <div css={lead}>メールアドレス</div>
                <div css={content}>{orderUser.email}</div>
              </div>
              <div css={flex}>
                <div css={lead}>電話番号</div>
                <div css={content}>
                  {orderUser.tel1}-{orderUser.tel2}-{orderUser.tel3}
                </div>
              </div>
            </>
          ) : (
            <div css={noContent}>注文者を作成してください</div>
          )}
        </Grid>
        {/* 配送先 */}
        <Grid xs={6}>
          <div css={title}>配送先</div>
          {orderShipping ? (
            <>
              <div css={flex}>
                <div css={lead}>名前</div>
                <div css={content}>
                  {orderShipping.last_name} {orderShipping.first_name}
                </div>
              </div>
              <div css={flex}>
                <div css={lead}>フリガナ</div>
                <div css={content}>
                  {orderShipping.last_kana} {orderShipping.first_kana}
                </div>
              </div>
              <div css={flex}>
                <div css={lead}>住所</div>
                <div css={content}>
                  <div>
                    〒:{orderShipping.zip_code1}-{orderShipping.zip_code2}
                  </div>
                  <div>
                    {prefs[Number(orderShipping.pref)]}
                    {orderShipping.city}
                    {orderShipping.address}
                    <br />
                    {orderShipping.building}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div css={noContent}>配送先を作成してください</div>
          )}
        </Grid>
        {/* 購入商品 */}
        <Grid xs={6}>
          <div css={title}>購入商品</div>
          {orderDetails.length === 0 && (
            <div css={noContent}>購入商品を作成してください</div>
          )}
          {orderDetails.length > 0 && (
            <>
              <div css={flex}>
                <div css={lead}>商品</div>
                <div css={content}>
                  {orderDetails.map((order) => (
                    <div key={order.product_id}>
                      {order.product_name} x {order.quantity}
                    </div>
                  ))}
                </div>
              </div>
              <div css={flex}>
                <div css={lead}>小計</div>
                <div css={content}>￥{subTotal}</div>
              </div>
              <div css={flex}>
                <div css={lead}>消費税</div>
                <div css={content}>￥{subTotal * 0.1}</div>
              </div>
              <div css={flex}>
                <div css={lead}>送料</div>
                <div css={content}>処理未定</div>
              </div>
              <div css={flex}>
                <div css={lead}>合計</div>
                <div css={content}>
                  ￥{Math.ceil(Math.floor(subTotal * 1.1 * 100) / 100)}
                </div>
              </div>
            </>
          )}
        </Grid>
        <Grid xs={6}></Grid>

        {/* ボタン */}
        <Grid xs={6} css={forms.buttonWrap}>
          <Button
            type="button"
            variant="contained"
            onClick={handleCreateOrder}
            css={
              orderUser && orderShipping && orderDetails.length > 0
                ? ''
                : disableButton
            }
          >
            受注を登録する
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}
