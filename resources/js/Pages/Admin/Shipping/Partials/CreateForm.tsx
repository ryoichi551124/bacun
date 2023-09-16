/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage, router } from '@inertiajs/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm } from 'react-hook-form'
import createShippingSchema, {
  CreateShippingSchemaType,
} from '@/Schemas/Admin/Shipping/createSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Pref } from '@/Types'

const button = css`
  margin-right: 2rem;
`

type ShippingData = {
  prefs: Pref
}
type ShippingCreateFormProps = {
  onCreateShipping?: (data: CreateShippingSchemaType) => void
}

/**
 * 配送先作成フォーム
 */
export default function ShippingCreateFrom({
  onCreateShipping,
}: ShippingCreateFormProps) {
  const { prefs } = usePage<ShippingData>().props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateShippingSchemaType>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(createShippingSchema),
  })

  /** 配送先作成 */
  const onSubmit = (data: CreateShippingSchemaType) => {
    onCreateShipping && onCreateShipping(data)
  }

  return (
    <Card title="配送先作成">
      <form onSubmit={handleSubmit(onSubmit)} css={forms.container}>
        <Grid container spacing={2}>
          {/* 名前（漢字） */}
          <Grid xs={4}>
            <label htmlFor="last_name" css={forms.label}>
              名前（姓）
            </label>
            <input
              id="last_name"
              placeholder="名前（姓）"
              css={[forms.input, errors.last_name && forms.error]}
              {...register('last_name')}
            />
            {errors.last_name && (
              <div css={forms.errText}>{errors.last_name.message}</div>
            )}
          </Grid>
          <Grid xs={4}>
            <label htmlFor="first_name" css={forms.label}>
              名前（名）
            </label>
            <input
              id="first_name"
              placeholder="名前（名）"
              css={[forms.input, errors.first_name && forms.error]}
              {...register('first_name')}
            />
            {errors.first_name && (
              <div css={forms.errText}>{errors.first_name.message}</div>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          {/* 名前（カナ） */}
          <Grid xs={4}>
            <label htmlFor="last_kana" css={forms.label}>
              名前（セイ）
            </label>
            <input
              id="last_kana"
              placeholder="名前（セイ）"
              css={[forms.input, errors.last_kana && forms.error]}
              {...register('last_kana')}
            />
            {errors.last_kana && (
              <div css={forms.errText}>{errors.last_kana.message}</div>
            )}
          </Grid>
          <Grid xs={4}>
            <label htmlFor="first_kana" css={forms.label}>
              名前（メイ）
            </label>
            <input
              id="first_kana"
              placeholder="名前（メイ）"
              css={[forms.input, errors.first_kana && forms.error]}
              {...register('first_kana')}
            />
            {errors.first_kana && (
              <div css={forms.errText}>{errors.first_kana.message}</div>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          {/* 郵便番号 */}
          <Grid xs={4}>
            <label css={forms.label}>郵便番号</label>
            <div css={forms.flexCenter}>
              <input
                placeholder="000"
                maxLength={3}
                css={[forms.input, errors.zip_code1 && forms.error]}
                {...register('zip_code1')}
              />
              -
              <input
                placeholder="0000"
                maxLength={4}
                css={[forms.input, errors.zip_code2 && forms.error]}
                {...register('zip_code2')}
              />
            </div>
            <div css={forms.flexCenter}>
              {errors.zip_code1 && (
                <div css={forms.errText}>{errors.zip_code1.message}</div>
              )}
              {errors.zip_code2 && (
                <div css={forms.errText}>{errors.zip_code2.message}</div>
              )}
            </div>
          </Grid>
          <Grid xs={8}></Grid>
          {/* 都道府県 */}
          <Grid xs={3}>
            <label htmlFor="pref" css={forms.label}>
              都道府県
            </label>
            <select css={forms.input} {...register('pref')}>
              {prefs &&
                Object.entries(prefs).map((pref) => (
                  <option key={pref[0]} value={pref[0]}>
                    {pref[1]}
                  </option>
                ))}
            </select>
          </Grid>
          <Grid xs={9}></Grid>
          {/* 市区町村 */}
          <Grid xs={6}>
            <label htmlFor="city" css={forms.label}>
              市区町村
            </label>
            <input
              id="city"
              placeholder="市区町村"
              css={[forms.input, errors.city && forms.error]}
              {...register('city')}
            />
            {errors.city && (
              <div css={forms.errText}>{errors.city.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 丁目番号地 */}
          <Grid xs={6}>
            <label htmlFor="address" css={forms.label}>
              丁目番号地
            </label>
            <input
              id="address"
              placeholder="丁目番号地"
              css={[forms.input, errors.address && forms.error]}
              {...register('address')}
            />
            {errors.address && (
              <div css={forms.errText}>{errors.address.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 建物名*/}
          <Grid xs={6}>
            <label htmlFor="building" css={forms.label}>
              建物名
            </label>
            <input
              id="building"
              placeholder="建物名"
              css={[forms.input, errors.building && forms.error]}
              {...register('building')}
            />
            {errors.building && (
              <div css={forms.errText}>{errors.building.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* メモ */}
          <Grid xs={9}>
            <label htmlFor="memo" css={forms.label}>
              メモ
            </label>
            <textarea
              id="memo"
              placeholder="メモ"
              rows={5}
              css={[forms.input, errors.memo && forms.error]}
              {...register('memo')}
            />
            {errors.memo && (
              <div css={forms.errText}>{errors.memo.message}</div>
            )}
          </Grid>
          <Grid xs={3}></Grid>
          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Link href={route('admin.shipping.list')}>
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
