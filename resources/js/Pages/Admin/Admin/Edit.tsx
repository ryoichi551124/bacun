import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import AdminUpdateForm from '@/Pages/Admin/Admin/Partials/UpdateForm'

const title = '管理者設定'

export default function AdminCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <AdminUpdateForm />
    </>
  )
}

AdminCreate.layout = (page: ReactNode) => <DashboardLayout children={page} />
