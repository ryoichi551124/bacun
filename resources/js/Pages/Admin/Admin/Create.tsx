import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Layout/Title'
import AdminCreateForm from '@/Pages/Admin/Admin/Partials/CreateForm'

const title = '管理者設定'

export default function AdminCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <AdminCreateForm />
    </>
  )
}

AdminCreate.layout = (page: ReactNode) => <DashboardLayout children={page} />
