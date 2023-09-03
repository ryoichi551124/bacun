import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import AdminCreateForm from '@/Pages/Admin/Admin/Partials/CreateForm'

const title = '管理者設定'

/**
 * 管理者作成ページ
 */
export default function AdminCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <AdminCreateForm />
    </>
  )
}

AdminCreate.layout = (page: ReactNode) => <AdminLayout children={page} />
