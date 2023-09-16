import { configureStore } from '@reduxjs/toolkit'
import { isSideOpenSlice } from '@/Stores/isSideOpen'
import { orderTempSlice } from '@/Stores/orderTemp'

export const store = configureStore({
  reducer: {
    isSideOpenReducer: isSideOpenSlice.reducer,
    orderTempReducer: orderTempSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
