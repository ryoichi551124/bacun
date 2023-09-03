import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'

export default function OrderList() {
  return <Head title="Admin Dashboard" />
}

OrderList.layout = (page: ReactNode) => <AdminLayout children={page} />
