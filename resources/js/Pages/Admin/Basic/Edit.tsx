import { ReactNode } from 'react'
import { Head, usePage } from '@inertiajs/react'
import AlertMessage from '@/Components/Admin/FeedBack/AlertMessage'
import AdminLayout from '@/Layouts/Admin/AdminLayout'
import Title from '@/Components/Admin/Common/Title'
import CompanyUpdateForm from '@/Pages/Admin/Basic/Partials/CompanyUpdateForm'
import ShopUpdateForm from '@/Pages/Admin/Basic/Partials/ShopUpdateForm'
import type { FlashMessage } from '@/Types'

const title = '基本情報'

type Message = {
  flash: FlashMessage
}

export default function BasicEdit() {
  const { flash } = usePage<Message>().props

  return (
    <>
      <Head title={title} />
      <Title title={title} />
      {flash.message && <AlertMessage {...flash} />}
      <ShopUpdateForm />
      <CompanyUpdateForm />
    </>
  )
}

BasicEdit.layout = (page: ReactNode) => <AdminLayout children={page} />
