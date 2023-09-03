import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import MailTemplateCreateForm from '@/Pages/Admin/MailTemplate/Partials/CreateForm'

const title = 'メール設定'

/**
 * メール作成ページ
 */
export default function MailTemplateCreate() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <MailTemplateCreateForm />
    </>
  )
}

MailTemplateCreate.layout = (page: ReactNode) => <AdminLayout children={page} />
