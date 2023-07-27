import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function OrderList() {
  return <Head title="Admin Dashboard" />
}

OrderList.layout = (page: ReactNode) => <DashboardLayout children={page} />
