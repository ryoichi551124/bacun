import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import UserCreateForm from '@/Pages/Admin/User/Partials/CreateForm'

const title = '顧客管理'

export default function AdminCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <UserCreateForm />
    </>
  )
}

AdminCreate.layout = (page: ReactNode) => <DashboardLayout children={page} />
