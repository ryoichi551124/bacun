import React, { ReactNode, useEffect, useState } from 'react'
import { Head } from '@inertiajs/react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Stores'
import {
  setOrderDetails,
  setOrderShipping,
  setOrderUser,
} from '@/Stores/orderTemp'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import CreateOrderTabs from '@/Pages/Admin/Order/Partials/CreateOrderTabs'
import ConfirmOrder from '@/Pages/Admin/Order/Partials/ConfirmOrder'

const title = '受注登録'

export default function OrderCreate() {
  const { orderUser, orderShipping, orderDetails } = useSelector(
    (state: RootState) => state.orderTempReducer,
  )
  const dispatch = useDispatch()

  // ページ読み込み時に受注の状態管理をリセット
  useEffect(() => {
    if (orderUser || orderShipping || orderDetails.length > 0) {
      dispatch(setOrderUser(undefined))
      dispatch(setOrderShipping(undefined))
      dispatch(setOrderDetails([]))
    }
  }, [])

  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <CreateOrderTabs />
      <ConfirmOrder />
    </>
  )
}

OrderCreate.layout = (page: ReactNode) => <AdminLayout children={page} />
