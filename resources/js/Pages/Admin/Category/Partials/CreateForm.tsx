/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { router } from '@inertiajs/react'
import { forms, mt0, pt0 } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm } from 'react-hook-form'
import createCategorySchema, {
  CreateCategorySchemaType,
} from '@/Schemas/Admin/Category/CreateSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export default function CategoryCreateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CreateCategorySchemaType>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(createCategorySchema),
  })

  const createCategory = (data: CreateCategorySchemaType) => {
    router.post('/admin/category/create/create', data)
    reset()
  }

  return (
    <Card title="カテゴリー新規作成">
      <form onSubmit={handleSubmit(createCategory)} css={forms.container}>
        <Grid container spacing={2} css={forms.flexCenter}>
          <Grid xs={1}>
            {/* 名前 */}
            <label htmlFor="name" css={forms.label}>
              名前
            </label>
          </Grid>
          <Grid xs={6}>
            <input
              id="name"
              placeholder="新規カテゴリー名を入力"
              css={[forms.input, mt0, errors.name && forms.error]}
              {...register('name')}
            />
          </Grid>
          {/* ボタン */}
          <Grid xs={5}>
            <Button type="submit" variant="contained">
              作成
            </Button>
          </Grid>
          {/* エラーメッセージ */}
          {errors.name && (
            <>
              <Grid xs={1}></Grid>
              <Grid xs={11} css={pt0}>
                  <div css={forms.errText}>{errors.name.message}</div>
              </Grid>
            </>
          )}
        </Grid>
      </form>
    </Card>
  )
}
