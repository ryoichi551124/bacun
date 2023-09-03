import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import MailTemplateUpdateForm from '@/Pages/Admin/MailTemplate/Partials/UpdateForm'

const title = 'メール設定'

/**
 * メール編集ページ
 */
export default function MailTemplateEdit() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <MailTemplateUpdateForm />
    </>
  )
}

MailTemplateEdit.layout = (page: ReactNode) => <AdminLayout children={page} />
