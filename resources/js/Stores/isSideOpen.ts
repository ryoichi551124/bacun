import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type IsSideOpen = {
  isOpen: boolean
}

// 初期値
const initialState: IsSideOpen = {
  isOpen: true,
}

// サイドバーのオープンクローズ管理
export const isSideOpenSlice = createSlice({
  name: 'isSideOpen',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
})

export const { setIsOpen } = isSideOpenSlice.actions
