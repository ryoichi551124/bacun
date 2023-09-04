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
} from '@/Schemas/Admin/Shipping/CreateSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Pref } from '@/Types'

const flex = css`
  display: flex;
  align-items: center;
`
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
            <label htmlFor="shipping_last_name" css={forms.label}>
              名前（姓）
            </label>
            <input
              id="shipping_last_name"
              placeholder="名前（姓）"
              css={[forms.input, errors.shipping_last_name && forms.error]}
              {...register('shipping_last_name')}
            />
            {errors.shipping_last_name && (
              <div css={forms.errText}>{errors.shipping_last_name.message}</div>
            )}
          </Grid>
          <Grid xs={4}>
            <label htmlFor="shipping_first_name" css={forms.label}>
              名前（名）
            </label>
            <input
              id="shipping_first_name"
              placeholder="名前（名）"
              css={[forms.input, errors.shipping_first_name && forms.error]}
              {...register('shipping_first_name')}
            />
            {errors.shipping_first_name && (
              <div css={forms.errText}>
                {errors.shipping_first_name.message}
              </div>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          {/* 名前（カナ） */}
          <Grid xs={4}>
            <label htmlFor="shipping_last_kana" css={forms.label}>
              名前（セイ）
            </label>
            <input
              id="shipping_last_kana"
              placeholder="名前（セイ）"
              css={[forms.input, errors.shipping_last_kana && forms.error]}
              {...register('shipping_last_kana')}
            />
            {errors.shipping_last_kana && (
              <div css={forms.errText}>{errors.shipping_last_kana.message}</div>
            )}
          </Grid>
          <Grid xs={4}>
            <label htmlFor="shipping_first_kana" css={forms.label}>
              名前（メイ）
            </label>
            <input
              id="shipping_first_kana"
              placeholder="名前（メイ）"
              css={[forms.input, errors.shipping_first_kana && forms.error]}
              {...register('shipping_first_kana')}
            />
            {errors.shipping_first_kana && (
              <div css={forms.errText}>
                {errors.shipping_first_kana.message}
              </div>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          {/* メール */}
          <Grid xs={6}>
            <label htmlFor="shipping_email" css={forms.label}>
              メール
            </label>
            <input
              id="shipping_email"
              placeholder="メールアドレス"
              css={[forms.input, errors.shipping_email && forms.error]}
              {...register('shipping_email')}
            />
            {errors.shipping_email && (
              <div css={forms.errText}>{errors.shipping_email.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 郵便番号 */}
          <Grid xs={4}>
            <label css={forms.label}>郵便番号</label>
            <div css={forms.flexCenter}>
              <input
                placeholder="000"
                maxLength={3}
                css={[forms.input, errors.shipping_zip_code1 && forms.error]}
                {...register('shipping_zip_code1')}
              />
              -
              <input
                placeholder="0000"
                maxLength={4}
                css={[forms.input, errors.shipping_zip_code2 && forms.error]}
                {...register('shipping_zip_code2')}
              />
            </div>
            <div css={forms.flexCenter}>
              {errors.shipping_zip_code1 && (
                <div css={forms.errText}>
                  {errors.shipping_zip_code1.message}
                </div>
              )}
              {errors.shipping_zip_code2 && (
                <div css={forms.errText}>
                  {errors.shipping_zip_code2.message}
                </div>
              )}
            </div>
          </Grid>
          <Grid xs={8}></Grid>
          {/* 都道府県 */}
          <Grid xs={3}>
            <label htmlFor="pref" css={forms.label}>
              都道府県
            </label>
            <select css={forms.input} {...register('shipping_pref')}>
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
            <label htmlFor="shipping_city" css={forms.label}>
              市区町村
            </label>
            <input
              id="shipping_city"
              placeholder="市区町村"
              css={[forms.input, errors.shipping_city && forms.error]}
              {...register('shipping_city')}
            />
            {errors.shipping_city && (
              <div css={forms.errText}>{errors.shipping_city.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 丁目番号地 */}
          <Grid xs={6}>
            <label htmlFor="shipping_address" css={forms.label}>
              丁目番号地
            </label>
            <input
              id="shipping_address"
              placeholder="丁目番号地"
              css={[forms.input, errors.shipping_address && forms.error]}
              {...register('shipping_address')}
            />
            {errors.shipping_address && (
              <div css={forms.errText}>{errors.shipping_address.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 建物名*/}
          <Grid xs={6}>
            <label htmlFor="shipping_building" css={forms.label}>
              建物名
            </label>
            <input
              id="shipping_building"
              placeholder="建物名"
              css={[forms.input, errors.shipping_building && forms.error]}
              {...register('shipping_building')}
            />
            {errors.shipping_building && (
              <div css={forms.errText}>{errors.shipping_building.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 電話番号 */}
          <Grid xs={6}>
            <label css={forms.label}>電話番号</label>
            <div css={forms.flexCenter}>
              <input
                placeholder="000"
                css={[forms.input, errors.shipping_tel1 && forms.error]}
                {...register('shipping_tel1')}
              />
              <input
                placeholder="0000"
                css={[forms.input, errors.shipping_tel2 && forms.error]}
                {...register('shipping_tel2')}
              />
              <input
                placeholder="0000"
                css={[forms.input, errors.shipping_tel3 && forms.error]}
                {...register('shipping_tel3')}
              />
            </div>
            <div css={forms.flexCenter}>
              {(errors.shipping_tel1 ||
                errors.shipping_tel2 ||
                errors.shipping_tel3) && (
                <div css={forms.errText}>入力が必須の項目です</div>
              )}
            </div>
          </Grid>
          <Grid xs={6}></Grid>
          {/* メモ */}
          <Grid xs={9}>
            <label htmlFor="shipping_memo" css={forms.label}>
              メモ
            </label>
            <textarea
              id="shipping_memo"
              placeholder="メモ"
              rows={5}
              css={[forms.input, errors.shipping_memo && forms.error]}
              {...register('shipping_memo')}
            />
            {errors.shipping_memo && (
              <div css={forms.errText}>{errors.shipping_memo.message}</div>
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
