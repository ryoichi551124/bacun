import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Layout/Title'
import AdminTable from '@/Components/Admin/Table/AdminTable'

const title = '管理者設定'

export default function AdminList() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <AdminTable />
    </>
  )
}

AdminList.layout = (page: ReactNode) => <DashboardLayout children={page} />
