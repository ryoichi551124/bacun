/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage, router } from '@inertiajs/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Layout/Card'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import createAdminSchema, {
  CreateAdminSchemaType,
} from '@/Schemas/Admin/Admin/CreateSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { AdminRoles } from '@/Types'

const button = css`
  margin-right: 2rem;
`

type AdminData = {
  roles: AdminRoles
}

export default function AdminCreateForm() {
  const { props } = usePage<AdminData>()
  const roles = Object.entries(props.roles)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAdminSchemaType>({
    resolver: zodResolver(createAdminSchema),
  })

  const createAdmin = (data: CreateAdminSchemaType) => {
    router.post('/admin/admin/create/create', data)
  }

  return (
    <Card title="管理者新規作成">
      <form onSubmit={handleSubmit(createAdmin)} css={forms.container}>
        {/* 名前 */}
        <div css={forms.wrap}>
          <label htmlFor="name" css={forms.label}>
            名前
          </label>
          <input
            id="name"
            css={[forms.input, errors.name && forms.error]}
            {...register('name')}
          />
          {errors.name && <div css={forms.errText}>{errors.name.message}</div>}
        </div>
        {/* メール */}
        <div css={forms.wrap}>
          <label htmlFor="email" css={forms.label}>
            メール
          </label>
          <input
            id="email"
            css={[forms.input, errors.email && forms.error]}
            {...register('email')}
          />
          {errors.email && (
            <div css={forms.errText}>{errors.email.message}</div>
          )}
        </div>
        {/* パスワード */}
        <div css={forms.wrap}>
          <label htmlFor="password" css={forms.label}>
            パスワード
          </label>
          <input
            id="password"
            type="password"
            autoComplete="off"
            css={[forms.input, errors.password && forms.error]}
            {...register('password')}
          />
          {errors.password && (
            <div css={forms.errText}>{errors.password.message}</div>
          )}
        </div>
        {/* パスワード（確認） */}
        <div css={forms.wrap}>
          <label htmlFor="password_confirmation" css={forms.label}>
            パスワード（確認）
          </label>
          <input
            id="password_confirmation"
            type="password"
            autoComplete="off"
            css={[forms.input, errors.password_confirmation && forms.error]}
            {...register('password_confirmation')}
          />
          {errors.password_confirmation && (
            <div css={forms.errText}>
              {errors.password_confirmation.message}
            </div>
          )}
        </div>
        {/* 権限 */}
        <div css={forms.wrap}>
          <label htmlFor="role" css={forms.label}>
            権限
          </label>
          <select css={forms.input} {...register('role')}>
            {roles.map((role) => (
              <option key={role[0]} value={role[0]}>
                {role[1]}
              </option>
            ))}
          </select>
        </div>
        {/* ボタン */}
        <div css={forms.buttonWrap}>
          <Link href={route('admin.admin.list')}>
            <Button variant="outlined" css={button}>
              戻る
            </Button>
          </Link>
          <Button type="submit" variant="contained">
            作成
          </Button>
        </div>
      </form>
    </Card>
  )
}
