import React, { ReactNode, useState } from 'react'
import { Head, router, usePage } from '@inertiajs/react'
import axios from 'axios'
import searchUsers from '@/Services/users/searchUsers'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import SearchUsers from '@/Pages/Admin/Shipping/Partials/SearchUsers'
import ShippingCreateForm from '@/Pages/Admin/Shipping/Partials/CreateForm'
import ResultUsers from './Partials/ResultUsers'
import type { SearchUsersSchemaType } from '@/Schemas/Admin/User/searchUsersSchema'
import type { User } from '@/Types'
import type { CreateShippingSchemaType } from '@/Schemas/Admin/Shipping/createSchema'

const title = '配送管理'

/**
 * 配送先作成ページ
 */
export default function ShippingCreate() {
  const [users, setUsers] = useState<User[] | undefined>(undefined)
  const [userId, setUserId] = useState<number | undefined>(undefined)
  const [noResult, setNoResult] = useState<boolean>(false)

  /** 顧客検索 */
  const handleSearchUsers = (data: SearchUsersSchemaType) => {
    searchUsers(data).then((res) => {
      if (res && res.length > 0) {
        setUsers(res)
        setUserId(res[0].id)
        setNoResult(false)
      } else {
        setUsers(undefined)
        setNoResult(true)
      }
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
      <SearchUsers onSearchUsers={handleSearchUsers} noResult={noResult} />
      {users && <ResultUsers users={users} setUserId={setUserId} />}
      <ShippingCreateForm onCreateShipping={handleCreateShipping} />
    </>
  )
}

ShippingCreate.layout = (page: ReactNode) => <AdminLayout children={page} />
