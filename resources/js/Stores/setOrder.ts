import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SetOrder = {
  userId?: number
  shippingId?: number
  productIds: number[]
}

// 初期値
const initialState: SetOrder = {
  userId: undefined,
  shippingId: undefined,
  productIds: [],
}

export const setOrderSlice = createSlice({
  name: 'setOrder',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload
    },
    setShippingId: (state, action: PayloadAction<number>) => {
      state.shippingId = action.payload
    },
    setProductId: (state, action: PayloadAction<number>) => {
      state.productIds.push(action.payload)
    },
    deleteProductId: (state, action: PayloadAction<number>) => {
      const index = state.productIds.indexOf(action.payload)
      state.productIds.splice(index, 1)
    },
    deleteAllProductIds: (state) => {
      state.productIds.splice(0)
    },
  },
})

export const {
  setUserId,
  setShippingId,
  setProductId,
  deleteProductId,
  deleteAllProductIds,
} = setOrderSlice.actions
