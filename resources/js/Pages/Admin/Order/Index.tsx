import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function Order() {
  return <Head title="Admin Dashboard" />
}

Order.layout = (page: ReactNode) => <DashboardLayout children={page} />
