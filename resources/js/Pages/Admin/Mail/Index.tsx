import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'

export default function Mail() {
  return <Head title="Admin Dashboard" />
}

Mail.layout = (page: ReactNode) => <AdminLayout children={page} />
