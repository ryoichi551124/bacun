import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'

export default function MailList() {
  return <Head title="Admin Mail List" />
}

MailList.layout = (page: ReactNode) => <AdminLayout children={page} />
