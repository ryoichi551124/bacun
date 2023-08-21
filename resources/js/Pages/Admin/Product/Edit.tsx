import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import Title from '@/Components/Admin/Common/Title'
import ProductUpdateForm from '@/Pages/Admin/Product/Partials/UpdateForm'

const title = '商品管理'

export default function ProductEdit() {
  return <>product edit</>
}

ProductEdit.layout = (page: ReactNode) => <DashboardLayout children={page} />
