import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function ProductList() {
  return <Head title="Admin Dashboard" />
}

ProductList.layout = (page: ReactNode) => <DashboardLayout children={page} />
