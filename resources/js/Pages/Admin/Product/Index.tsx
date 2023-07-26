import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function Product() {
  return <Head title="Admin Dashboard" />
}

Product.layout = (page: ReactNode) => <DashboardLayout children={page} />
