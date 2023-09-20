import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CreateOrderUserSchemaType } from '@/Schemas/Admin/Order/createOrderUserSchema'
import { CreateOrderShippingSchemaType } from '@/Schemas/Admin/Order/createOrderShippingSchema'
import { OrderDetail } from '@/Types'

export type OrderTemp = {
  userId: number | undefined
  orderUser: CreateOrderUserSchemaType | undefined
  orderShipping: CreateOrderShippingSchemaType | undefined
  orderDetails: OrderDetail[]
}
export type OrderDetailQuantity = {
  index: number
  quantity: number
}

const initialState: OrderTemp = {
  userId: undefined,
  orderUser: undefined,
  orderShipping: undefined,
  orderDetails: [],
}

export const orderTempSlice = createSlice({
  name: 'orderTemp',
  initialState,
  reducers: {
    // ユーザーIDのセット
    setUserId: (state, action: PayloadAction<number | undefined>) => {
      state.userId = action.payload
    },
    // 注文者の設定
    setOrderUser: (
      state,
      action: PayloadAction<CreateOrderUserSchemaType | undefined>,
    ) => {
      state.orderUser = action.payload
    },
    // 配送先の設定
    setOrderShipping: (
      state,
      action: PayloadAction<CreateOrderShippingSchemaType | undefined>,
    ) => {
      state.orderShipping = action.payload
    },
    // 購入商品の個数変更
    updateOrderQuantity: (
      state,
      action: PayloadAction<OrderDetailQuantity>,
    ) => {
      state.orderDetails[action.payload.index].quantity =
        action.payload.quantity
    },
    // 購入商品をセット
    setOrderDetails: (state, action: PayloadAction<OrderDetail[]>) => {
      state.orderDetails = action.payload
    },
    // 購入商品を削除
    deleteOrderDetail: (state, action: PayloadAction<number>) => {
      state.orderDetails.splice(action.payload, 1)
    },
  },
})

// アクションの追加
export const {
  setUserId,
  setOrderUser,
  setOrderShipping,
  updateOrderQuantity,
  setOrderDetails,
  deleteOrderDetail,
} = orderTempSlice.actions
