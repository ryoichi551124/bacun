import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function Admin() {
  return <Head title="Admin Dashboard" />
}

Admin.layout = (page: ReactNode) => <DashboardLayout children={page} />
