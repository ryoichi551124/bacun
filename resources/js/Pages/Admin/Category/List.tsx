import { ReactNode } from 'react'
import { Head, usePage } from '@inertiajs/react'
import AlertMessage from '@/Components/Admin/FeedBack/AlertMessage'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import CategoryCreateForm from '@/Pages/Admin/Category/Partials/CreateForm'
import CategoryListTable from '@/Pages/Admin/Category/Partials/ListTable'
import type { FlashMessage } from '@/Types'

const title = 'カテゴリー管理'

type Message = {
  flash: FlashMessage
}

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

CategoryList.layout = (page: ReactNode) => <DashboardLayout children={page} />
