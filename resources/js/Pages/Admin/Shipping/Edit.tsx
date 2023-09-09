import React, { ReactNode, useState } from 'react'
import { Head, usePage, router } from '@inertiajs/react'
import axios from 'axios'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import SearchUser from '@/Pages/Admin/Shipping/Partials/SearchUser'
import ShippingUpdateForm from '@/Pages/Admin/Shipping/Partials/UpdateForm'
import ResultUsers from './Partials/ResultUsers'
import type { UpdateShippingSchemaType } from '@/Schemas/Admin/Shipping/updateSchema'
import type { Shipping, User } from '@/Types'
import type { SearchUserSchemaType } from '@/Schemas/Admin/Shipping/SearchUser'

const title = '配送管理'

type ShippingData = {
  shipping: Shipping
  user: User
}

/**
 * 配送先編集ページ
 */
export default function ShippingEdit() {
  const { shipping, user } = usePage<ShippingData>().props

  const [users, setUsers] = useState<User[] | undefined>([user])
  const [userId, setUserId] = useState<number | undefined>(shipping.user_id)
  const [noResult, setNoResult] = useState<boolean>(false)

  /** 顧客検索 */
  const handleSearchUser = (data: SearchUserSchemaType) => {
    axios
      .post('/admin/api/user/search', data)
      .then((res) => {
        if (res.data.length > 0) {
          setUsers(res.data)
          setUserId(res.data[0].id)
          setNoResult(false)
        } else {
          setUsers(undefined)
          setNoResult(true)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  /** 配送先編集 */
  const handleUpdateShipping = (data: UpdateShippingSchemaType) => {
    router.put(`/admin/shipping/edit/update/${userId}`, data)
  }

  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <SearchUser onSearchUser={handleSearchUser} noResult={noResult} />
      {users && <ResultUsers users={users} setUserId={setUserId} />}
      <ShippingUpdateForm onUpdateShipping={handleUpdateShipping} />
    </>
  )
}

ShippingEdit.layout = (page: ReactNode) => <AdminLayout children={page} />
