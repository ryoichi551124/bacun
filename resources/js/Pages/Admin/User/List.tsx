import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import UserListTable from '@/Pages/Admin/User/Partials/ListTable'

const title = '顧客管理'

/**
 * 顧客一覧ページ
 */
export default function UserList() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <UserListTable />
    </>
  )
}

UserList.layout = (page: ReactNode) => <AdminLayout children={page} />
