import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import MailTemplateListTable from '@/Pages/Admin/MailTemplate/Partials/ListTable'

const title = 'メール設定'

/**
 * メール一覧ページ
 */
export default function MailTemplateList() {
  return (
    <>
      <Head title={title} />
      <Title title={title} />
      <MailTemplateListTable />
    </>
  )
}

MailTemplateList.layout = (page: ReactNode) => <AdminLayout children={page} />
