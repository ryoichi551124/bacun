/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage, router } from '@inertiajs/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import InputImage from '@/Components/Admin/Form/Image/InputImage'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm, Controller } from 'react-hook-form'
import createProductSchema, {
  CreateProductSchemaType,
} from '@/Schemas/Admin/Product/CreateSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Product } from '@/Types'

const space = css`
  margin-top: 0.5rem;
`
const button = css`
  margin-right: 2rem;
`

export default function ProductCreateForm() {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<CreateProductSchemaType>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(createProductSchema)
  })

  const createProduct = (data: CreateProductSchemaType) => {
    console.log(data)
    //router.post('/admin/product/create/create', data)
  }

  return (
    <Card title="商品新規作成">
      <form onSubmit={handleSubmit(createProduct)} css={forms.container}>
        <Grid container spacing={2}>
          {/* メイン画像 */}
          <Grid xs={4} css={{ width: '250px' }}>
            <label htmlFor="main_img" css={forms.label}>
              メイン画像
            </label>
            <Controller
              control={control}
              name="main_img"
              rules={{ required: true }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputImage
                  images={value ?? []}
                  width={'200px'}
                  height={'200px'}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid xs={4}>
            {/* 商品名 */}
            <div>
              <label htmlFor="name" css={forms.label}>
                商品名
              </label>
              <input
                id="name"
                placeholder="商品名"
                css={[forms.input, errors.name && forms.error]}
                {...register('name')}
              />
              {errors.name && (
                <div css={forms.errText}>{errors.name.message}</div>
              )}
            </div>
            {/* 通常料金 */}
            <div css={space}>
              <label htmlFor="regular_price" css={forms.label}>
                通常料金
              </label>
              <input
                id="regular_price"
                placeholder="通常料金"
                css={[forms.input, errors.regular_price && forms.error]}
                {...register('regular_price')}
              />
              {errors.regular_price && (
                <div css={forms.errText}>{errors.regular_price.message}</div>
              )}
            </div>
            {/* 販売料金 */}
            <div css={space}>
              <label htmlFor="sales_price" css={[forms.label]}>
                販売料金
              </label>
              <input
                id="sales_price"
                placeholder="販売料金"
                css={[forms.input, errors.sales_price && forms.error]}
                {...register('sales_price')}
              />
              {errors.sales_price && (
                <div css={forms.errText}>{errors.sales_price.message}</div>
              )}
            </div>
          </Grid>
          <Grid xs={2}></Grid>
          <Grid xs={12}></Grid>

          {/* サムネイル */}
          <Grid xs={3} style={{ width: '200px' }}>
            <label htmlFor="thumbnail" css={forms.label}>
              サムネイル
            </label>
            <Controller
              control={control}
              name="thumbnail"
              rules={{ required: true }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputImage
                  images={value ?? []}
                  width={'180px'}
                  height={'180px'}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          {/* サブ画像1 */}
          <Grid xs={3} style={{ width: '200px' }}>
            <label htmlFor="sub_img1" css={forms.label}>
              サブ画像1
            </label>
            <Controller
              control={control}
              name="sub_img1"
              rules={{ required: true }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputImage
                  images={value ?? []}
                  width={'180px'}
                  height={'180px'}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          {/* サブ画像2 */}
          <Grid xs={3} style={{ width: '200px' }}>
            <label htmlFor="sub_img2" css={forms.label}>
              サブ画像2
            </label>
            <Controller
              control={control}
              name="sub_img2"
              rules={{ required: true }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputImage
                  images={value ?? []}
                  width={'180px'}
                  height={'180px'}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          {/* サブ画像3 */}
          <Grid xs={3} style={{ width: '200px' }}>
            <label htmlFor="sub_img3" css={forms.label}>
              サブ画像3
            </label>
            <Controller
              control={control}
              name="sub_img3"
              rules={{ required: true }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputImage
                  images={value ?? []}
                  width={'180px'}
                  height={'180px'}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          {/* 商品説明1 */}
          <Grid xs={8}>
            <label htmlFor="content1" css={forms.label}>
              商品説明1
            </label>
            <textarea
              id="content1"
              placeholder="商品説明1"
              rows={5}
              css={[forms.input, errors.content1 && forms.error]}
              {...register('content1')}
            />
            {errors.content1 && (
              <div css={forms.errText}>{errors.content1.message}</div>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          {/* 商品説明2 */}
          <Grid xs={8}>
            <label htmlFor="content2" css={forms.label}>
              商品説明2
            </label>
            <textarea
              id="content2"
              placeholder="商品説明2"
              rows={5}
              css={[forms.input, errors.content2 && forms.error]}
              {...register('content2')}
            />
            {errors.content2 && (
              <div css={forms.errText}>{errors.content2.message}</div>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          {/* 商品説明3 */}
          <Grid xs={8}>
            <label htmlFor="content3" css={forms.label}>
              商品説明3
            </label>
            <textarea
              id="content3"
              placeholder="商品説明3"
              rows={5}
              css={[forms.input, errors.content3 && forms.error]}
              {...register('content3')}
            />
            {errors.content3 && (
              <div css={forms.errText}>{errors.content3.message}</div>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          {/* 商品説明4 */}
          <Grid xs={8}>
            <label htmlFor="content4" css={forms.label}>
              商品説明4
            </label>
            <textarea
              id="content4"
              placeholder="商品説明4"
              rows={5}
              css={[forms.input, errors.content4 && forms.error]}
              {...register('content4')}
            />
            {errors.content4 && (
              <div css={forms.errText}>{errors.content4.message}</div>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          {/* メモ */}
          <Grid xs={8}>
            <label htmlFor="memo" css={forms.label}>
              メモ
            </label>
            <textarea
              id="memo"
              placeholder="メモ"
              rows={5}
              css={[forms.input, errors.memo && forms.error]}
              {...register('content4')}
            />
            {errors.memo && (
              <div css={forms.errText}>{errors.memo.message}</div>
            )}
          </Grid>
          <Grid xs={4}></Grid>

          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Link href={route('admin.product.list')}>
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
