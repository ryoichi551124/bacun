import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import UserCreateForm from '@/Pages/Admin/User/Partials/CreateForm'

const title = '顧客管理'

export default function UserCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <UserCreateForm />
    </>
  )
}

UserCreate.layout = (page: ReactNode) => <AdminLayout children={page} />
