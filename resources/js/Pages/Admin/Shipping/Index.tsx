import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/Admin/AdminLayout'

export default function Shipping() {
  return <Head title="Admin Dashboard" />
}

Shipping.layout = (page: ReactNode) => <AdminLayout children={page} />
