import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CreateOrderUserSchemaType } from '@/Schemas/Admin/Order/createOrderUserSchema'
import { CreateOrderShippingSchemaType } from '@/Schemas/Admin/Order/createOrderShippingSchema'
import { OrderDetail } from '@/Types'

export type OrderTemp = {
  orderUser: CreateOrderUserSchemaType | undefined
  orderShipping: CreateOrderShippingSchemaType | undefined
  orderDetails: OrderDetail[]
}

const initialState: OrderTemp = {
  orderUser: undefined,
  orderShipping: undefined,
  orderDetails: [],
}

export const orderTempSlice = createSlice({
  name: 'orderTemp',
  initialState,
  reducers: {
    // 注文者の設定
    // 配送先の設定
    // 購入商品の追加・編集・削除
  },
})

// アクションの追加
// export const {} = orderTempSlice.actions
