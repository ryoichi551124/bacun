import { ReactNode } from 'react'
import { Head, usePage } from '@inertiajs/react'
import AlertMessage from '@/Components/Admin/FeedBack/AlertMessage'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import CategoryCreateForm from '@/Pages/Admin/Category/Partials/CreateForm'
import CategoryListTable from '@/Pages/Admin/Category/Partials/ListTable'
import type { FlashMessage } from '@/Types'

const title = 'カテゴリー管理'

type Message = {
  flash: FlashMessage
}

/**
 * カテゴリー一覧ページ
 */
export default function CategoryList() {
  const { flash } = usePage<Message>().props

  return (
    <>
      <Head title="Admin Dashboard" />
      <Title title={title} />
      {flash.message && <AlertMessage {...flash} />}
      <CategoryCreateForm />
      <CategoryListTable />
    </>
  )
}

CategoryList.layout = (page: ReactNode) => <AdminLayout children={page} />
