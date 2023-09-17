/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage, router } from '@inertiajs/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm } from 'react-hook-form'
import updateAdminSchema, {
  UpdateAdminSchemaType,
} from '@/Schemas/Admin/Admin/updateSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Admin, AdminRoles } from '@/Types'

const button = css`
  margin-right: 2rem;
`

type AdminData = {
  admin: Admin
  roles: AdminRoles
}

/**
 * 管理者編集フォーム
 */
export default function AdminUpdateForm() {
  const { admin, roles } = usePage<AdminData>().props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateAdminSchemaType>({
    defaultValues: admin,
    reValidateMode: 'onBlur',
    resolver: zodResolver(updateAdminSchema),
  })

  /** 管理者の編集 */
  const updateAdmin = (data: UpdateAdminSchemaType) => {
    router.put(`/admin/admin/edit/update/${admin.id}`, data)
  }

  return (
    <Card title="管理者編集">
      <form onSubmit={handleSubmit(updateAdmin)} css={forms.container}>
        <Grid container spacing={2}>
          {/* 名前 */}
          <Grid xs={6}>
            <label htmlFor="name" css={forms.label}>
              名前
            </label>
            <input
              id="name"
              placeholder="名前"
              css={[forms.input, errors.name && forms.error]}
              {...register('name')}
            />
            {errors.name && (
              <div css={forms.errText}>{errors.name.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* メール */}
          <Grid xs={6}>
            <label htmlFor="email" css={forms.label}>
              メール
            </label>
            <input
              id="email"
              placeholder="メールアドレス"
              css={[forms.input, errors.email && forms.error]}
              {...register('email')}
            />
            {errors.email && (
              <div css={forms.errText}>{errors.email.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 権限 */}
          <Grid xs={6}>
            <label htmlFor="role" css={forms.label}>
              権限
            </label>
            <select css={forms.input} {...register('role')}>
              {Object.entries(roles).map((role) => (
                <option key={role[0]} value={role[0]}>
                  {role[1]}
                </option>
              ))}
            </select>
          </Grid>
          <Grid xs={6}></Grid>
          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Link href={route('admin.admin.list')}>
              <Button variant="outlined" css={button}>
                戻る
              </Button>
            </Link>
            <Button type="submit" variant="contained">
              編集
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}
