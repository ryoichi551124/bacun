/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactNode, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/Stores'
import { colors } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import OrderUserTab from '@/Pages/Admin/Order/Partials/Tabs/OrderUserTab'
import OrderShippingTab from '@/Pages/Admin/Order/Partials/Tabs/OrderShippingTab'
import OrderDetailsTab from '@/Pages/Admin/Order/Partials/Tabs/OrderDetailsTab'
import type { User } from '@/Types'

export default function ConfirmOrder() {
  // 顧客の検索から選択
  const [user, setUser] = useState<User | undefined>(undefined)
  // 注文者、配送先、購入商品
  const { orderUser, orderShipping, orderDetails } = useSelector(
    (state: RootState) => state.orderTempReducer,
  )

  return <>test</>
}
