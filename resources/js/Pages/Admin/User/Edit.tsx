import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import UserUpdateForm from '@/Pages/Admin/User/Partials/UpdateForm'

const title = '顧客管理'

export default function UserEdit() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <UserUpdateForm />
    </>
  )
}

UserEdit.layout = (page: ReactNode) => <DashboardLayout children={page} />