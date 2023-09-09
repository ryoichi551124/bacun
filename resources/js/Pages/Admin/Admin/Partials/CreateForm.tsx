/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage, router } from '@inertiajs/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm } from 'react-hook-form'
import createAdminSchema, {
  CreateAdminSchemaType,
} from '@/Schemas/Admin/Admin/createSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { AdminRoles } from '@/Types'

const button = css`
  margin-right: 2rem;
`

type AdminData = {
  roles: AdminRoles
}

/**
 * 管理者作成フォーム
 */
export default function AdminCreateForm() {
  const { roles } = usePage<AdminData>().props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAdminSchemaType>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(createAdminSchema),
  })

  /** 管理者新規作成 */
  const createAdmin = (data: CreateAdminSchemaType) => {
    router.post('/admin/admin/create/create', data)
  }

  return (
    <Card title="管理者新規作成">
      <form onSubmit={handleSubmit(createAdmin)} css={forms.container}>
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
          {/* パスワード */}
          <Grid xs={6}>
            <label htmlFor="password" css={forms.label}>
              パスワード
            </label>
            <input
              id="password"
              placeholder="パスワード"
              type="password"
              autoComplete="off"
              css={[forms.input, errors.password && forms.error]}
              {...register('password')}
            />
            {errors.password && (
              <div css={forms.errText}>{errors.password.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* パスワード（確認） */}
          <Grid xs={6}>
            <label htmlFor="password_confirmation" css={forms.label}>
              パスワード（確認）
            </label>
            <input
              id="password_confirmation"
              placeholder="パスワード（確認）"
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
              作成
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}
