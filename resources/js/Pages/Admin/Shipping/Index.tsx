import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function Shipping() {
  return <Head title="Admin Dashboard" />
}

Shipping.layout = (page: ReactNode) => <DashboardLayout children={page} />
