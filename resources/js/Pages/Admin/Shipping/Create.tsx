import React, { ReactNode, useState } from 'react'
import { Head, router, usePage } from '@inertiajs/react'
import axios from 'axios'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import SearchUser from '@/Pages/Admin/Shipping/Partials/SearchUser'
import ShippingCreateForm from '@/Pages/Admin/Shipping/Partials/CreateForm'
import ResultUsers from './Partials/ResultUsers'
import type { SearchUserSchemaType } from '@/Schemas/Admin/Shipping/SearchUser'
import type { User } from '@/Types'
import type { CreateShippingSchemaType } from '@/Schemas/Admin/Shipping/CreateSchema'

const title = '配送管理'

/**
 * 配送先作成ページ
 */
export default function ShippingCreate() {
  const [users, setUsers] = useState<User[] | undefined>(undefined)
  const [userId, setUserId] = useState<number | undefined>(undefined)
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

  /** 配送先作成 */
  const handleCreateShipping = (data: CreateShippingSchemaType) => {
    const shipping = { ...data, user_id: userId }
    router.post('/admin/shipping/create/create', shipping)
  }

  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <SearchUser onSearchUser={handleSearchUser} noResult={noResult} />
      {users && <ResultUsers users={users} setUserId={setUserId} />}
      <ShippingCreateForm onCreateShipping={handleCreateShipping} />
    </>
  )
}

ShippingCreate.layout = (page: ReactNode) => <AdminLayout children={page} />
