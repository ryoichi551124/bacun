/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage, router } from '@inertiajs/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm } from 'react-hook-form'
import updateShopSchema, {
  UpdateShopSchemaType,
} from '@/Schemas/Admin/Basic/Shop/UpdateShema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Basic } from '@/Types'

export default function ShopUpdateForm() {
  const { basic } = usePage<Basic>().props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      shop_name: basic?.shop_name,
      shop_kana: basic?.shop_kana,
      shop_message: basic?.shop_message,
    },
    reValidateMode: 'onBlur',
    resolver: zodResolver(updateShopSchema),
  })

  const updateShop = (data: UpdateShopSchemaType) => {
    router.put('/admin/basic/edit/update', data)
  }

  return (
    <Card title="ショップ情報">
      <form onSubmit={handleSubmit(updateShop)} css={forms.container}>
        <Grid container spacing={2}>
          {/* ショップ名 */}
          <Grid xs={6}>
            <label htmlFor="shop_name" css={forms.label}>
              ショップ名
            </label>
            <input
              id="shop_name"
              placeholder="ショップ名"
              css={[forms.input, errors.shop_name && forms.error]}
              {...register('shop_name')}
            />
            {errors.shop_name && (
              <div css={forms.errText}>{errors.shop_name.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* ショップ名（カナ） */}
          <Grid xs={6}>
            <label htmlFor="shop_kana" css={forms.label}>
              ショップ名（カナ）
            </label>
            <input
              id="shop_kana"
              placeholder="ショップ名（カナ）"
              css={[forms.input, errors.shop_kana && forms.error]}
              {...register('shop_kana')}
            />
            {errors.shop_kana && (
              <div css={forms.errText}>{errors.shop_kana.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* ショップメッセージ */}
          <Grid xs={12}>
            <label htmlFor="shop_message" css={forms.label}>
              ショップメッセージ
            </label>
            <textarea
              id="shop_message"
              placeholder="ショップメッセージ"
              rows={5}
              css={[forms.input, errors.shop_message && forms.error]}
              {...register('shop_message')}
            />
            {errors.shop_message && (
              <div css={forms.errText}>{errors.shop_message.message}</div>
            )}
          </Grid>
          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Button type="submit" variant="contained">
              編集
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}
