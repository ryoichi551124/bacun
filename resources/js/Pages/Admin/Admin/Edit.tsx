import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import AdminUpdateForm from '@/Pages/Admin/Admin/Partials/UpdateForm'

const title = '管理者設定'

/**
 * 管理者編集ページ
 */
export default function AdminEdit() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <AdminUpdateForm />
    </>
  )
}

AdminEdit.layout = (page: ReactNode) => <AdminLayout children={page} />
