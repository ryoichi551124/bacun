import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import AdminListTable from '@/Pages/Admin/Admin/Partials/ListTable'

const title = '管理者設定'

/**
 * 管理者一覧ページ
 */
export default function AdminList() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <AdminListTable />
    </>
  )
}

AdminList.layout = (page: ReactNode) => <AdminLayout children={page} />
