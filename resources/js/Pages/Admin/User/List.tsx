import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import UserListTable from '@/Pages/Admin/User/Partials/ListTable'

const title = '顧客管理'

export default function UserList() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <UserListTable />
    </>
  )
}

UserList.layout = (page: ReactNode) => <DashboardLayout children={page} />
