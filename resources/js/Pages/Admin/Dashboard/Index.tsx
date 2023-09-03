import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'

export default function Dashboard() {
  return <Head title="Admin Dashboard" />
}

Dashboard.layout = (page: ReactNode) => <AdminLayout children={page} />
