/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage, router } from '@inertiajs/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm } from 'react-hook-form'
import updateUserPasswordSchema, {
  UpdateUserPasswordSchemaType,
} from '@/Schemas/Admin/User/updatePasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { User } from '@/Types'

const button = css`
  margin-right: 2rem;
`

type UserData = {
  user: User
}

/**
 * 顧客パスワード編集フォーム
 */
export default function UserPasswordUpdateForm() {
  const { user } = usePage<UserData>().props

  const {
    register,
    handleSubmit,
    formState: { errors } ,
  } = useForm<UpdateUserPasswordSchemaType>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(updateUserPasswordSchema),
  })

  /** 顧客のパスワード編集 */
  const updateUserPassword = (data: UpdateUserPasswordSchemaType) => {
    router.put(`/admin/user/edit/update/password/${user.id}`, data)
  }

  return (
    <Card title="パスワード変更">
      <form onSubmit={handleSubmit(updateUserPassword)} css={forms.container}>
        <Grid container spacing={2}>
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
          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Link href={route('admin.user.list')}>
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
