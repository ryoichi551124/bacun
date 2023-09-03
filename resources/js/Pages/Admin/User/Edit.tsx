import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import UserUpdateForm from '@/Pages/Admin/User/Partials/UpdateForm'

const title = '顧客管理'

/**
 * 顧客編集ページ
 */
export default function UserEdit() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <UserUpdateForm />
    </>
  )
}

UserEdit.layout = (page: ReactNode) => <AdminLayout children={page} />
