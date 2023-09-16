import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CreateOrderUserSchemaType } from '@/Schemas/Admin/Order/createOrderUserSchema'
import { CreateOrderShippingSchemaType } from '@/Schemas/Admin/Order/createOrderShippingSchema'
import { OrderDetail } from '@/Types'
import { CallToActionSharp } from '@mui/icons-material'

export type OrderTemp = {
  orderUser: CreateOrderUserSchemaType | undefined
  orderShipping: CreateOrderShippingSchemaType | undefined
  orderDetails: OrderDetail[]
}
export type OrderDetailQuantity = {
  index: number
  quantity: number
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
    setOrderUser: (state, action: PayloadAction<CreateOrderUserSchemaType>) => {
      state.orderUser = action.payload
    },
    // 配送先の設定
    setOrderShipping: (
      state,
      action: PayloadAction<CreateOrderShippingSchemaType>,
    ) => {
      state.orderShipping = action.payload
    },
    // 購入商品の設定
    updateOrderDetailQuantity: (
      state,
      action: PayloadAction<OrderDetailQuantity>,
    ) => {
      state.orderDetails[action.payload.index].quantity =
        action.payload.quantity
    },
    setOrderDetails: (state, action: PayloadAction<OrderDetail[]>) => {
      console.log('action')
      state.orderDetails = action.payload
    },
  },
})

// アクションの追加
export const {
  setOrderUser,
  setOrderShipping,
  setOrderDetails,
  updateOrderDetailQuantity,
} = orderTempSlice.actions
