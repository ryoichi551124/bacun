import { configureStore } from '@reduxjs/toolkit'
import { isSideOpenSlice } from '@/Stores/isSideOpen'

export const store = configureStore({
  reducer: {
    isSideOpenReducer: isSideOpenSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
