/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forms, colors, mb0, pt0 } from '@/Styles'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm } from 'react-hook-form'
import searchUserSchema, {
  SearchUsersSchemaType,
} from '@/Schemas/Admin/User/searchUsersSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { User } from '@/Types'

const errorText = css`
  display: inline-block;
  margin-left: 1rem;
  color: ${colors.error};
`

type SearchUserProps = {
  onSearchUser?: (data: SearchUsersSchemaType) => void
  users?: User[]
}

/**
 * 顧客検索フォーム
 */
export default function SearchUser({ onSearchUser, users }: SearchUserProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchUsersSchemaType>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(searchUserSchema),
  })

  /** 顧客検索 */
  const onSubmit = (data: SearchUsersSchemaType) => {
    onSearchUser && onSearchUser(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} css={[forms.container, mb0]}>
        <Grid container spacing={2}>
          {/* 顧客名 */}
          <Grid xs={4}>
            <label htmlFor="name" css={forms.label}>
              顧客名
            </label>
            <input
              id="name"
              placeholder="顧客名"
              css={forms.input}
              {...register('name')}
            />
          </Grid>
          {/* メールアドレス */}
          <Grid xs={4}>
            <label htmlFor="email" css={forms.label}>
              メールアドレス
            </label>
            <input
              id="email"
              placeholder="メールアドレス"
              css={forms.input}
              {...register('email')}
            />
          </Grid>
          {/* 電話番号 */}
          <Grid xs={4}>
            <label htmlFor="tel" css={forms.label}>
              電話番号
            </label>
            <input
              id="tel"
              placeholder="電話番号"
              css={forms.input}
              {...register('tel')}
            />
          </Grid>
          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Button type="submit" variant="contained">
              検索する
            </Button>
            {users && users.length === 0 && (
              <div css={errorText}>検索結果がありません</div>
            )}
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
