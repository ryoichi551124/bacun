/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage, router } from '@inertiajs/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm } from 'react-hook-form'
import createDeliverySchema, {
  CreateDeliverySchemaType,
} from '@/Schemas/Admin/Delivery/CreateSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const button = css`
  margin-right: 2rem;
`

/**
 * 送料新規作成フォーム
 */
export default function DeliveryCreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDeliverySchemaType>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(createDeliverySchema),
  })

  /** 送料新規作成 */
  const createDelivery = (data: CreateDeliverySchemaType) => {
    router.post('/admin/delivery/create/create', data)
  }

  return (
    <Card title="送料新規作成">
      <form onSubmit={handleSubmit(createDelivery)} css={forms.container}>
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
          {/* 送料説明 */}
          <Grid xs={9}>
            <label htmlFor="description" css={forms.label}>
              送料説明
            </label>
            <textarea
              id="description"
              placeholder="送料説明"
              rows={5}
              css={[forms.input, errors.description && forms.error]}
              {...register('description')}
            />
            {errors.description && (
              <div css={forms.errText}>{errors.description.message}</div>
            )}
          </Grid>
          <Grid xs={3}></Grid>
          {/* 配送日数 */}
          <Grid xs={6}>
            <label htmlFor="duration" css={forms.label}>
              配送日数
            </label>
            <input
              id="duration"
              placeholder="〇日〜〇日"
              css={[forms.input, errors.duration && forms.error]}
              {...register('duration')}
            />
            {errors.duration && (
              <div css={forms.errText}>{errors.duration.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 送料 */}
          <Grid xs={6}>
            <label htmlFor="delivery_fee1" css={forms.label}>
              送料
            </label>
            <input
              id="delivery_fee1"
              placeholder="送料"
              css={[forms.input, errors.delivery_fee1 && forms.error]}
              {...register('delivery_fee1')}
            />
            {errors.delivery_fee1 && (
              <div css={forms.errText}>{errors.delivery_fee1.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 送料（沖縄・離島料金） */}
          <Grid xs={6}>
            <label htmlFor="delivery_fee2" css={forms.label}>
              送料（沖縄・離島料金）
            </label>
            <input
              id="delivery_fee2"
              placeholder="送料（沖縄・離島料金）"
              css={[forms.input, errors.delivery_fee2 && forms.error]}
              {...register('delivery_fee2')}
            />
            {errors.delivery_fee2 && (
              <div css={forms.errText}>{errors.delivery_fee2.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* カテゴリー */}
          <Grid xs={6}>
            <label htmlFor="category" css={forms.label}>
              カテゴリー
            </label>
            <input
              id="category"
              placeholder="カテゴリー"
              css={[forms.input, errors.category && forms.error]}
              {...register('category')}
            />
            {errors.category && (
              <div css={forms.errText}>{errors.category.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Link href={route('admin.delivery.list')}>
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
