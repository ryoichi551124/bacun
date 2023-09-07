import { configureStore } from '@reduxjs/toolkit'
import { isSideOpenSlice } from '@/Stores/isSideOpen'
import { setOrderSlice } from '@/Stores/setOrder'

export const store = configureStore({
  reducer: {
    isSideOpenReducer: isSideOpenSlice.reducer,
    setOrderReducer: setOrderSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
