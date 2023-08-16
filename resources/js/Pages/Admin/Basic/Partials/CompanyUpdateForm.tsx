/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage, router } from '@inertiajs/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm } from 'react-hook-form'
import updateCompanySchema, {
  UpdateCompanySchemaType,
} from '@/Schemas/Admin/Basic/Company/UpdateSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Basic } from '@/Types'

export default function CompanyUpdateForm() {
  const { basic } = usePage<Basic>().props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company_name: basic?.company_name,
      company_kana: basic?.company_kana,
      zip_code1: basic?.zip_code1,
      zip_code2: basic?.zip_code2,
      address1: basic?.address1,
      address2: basic?.address2,
      tel1: basic?.tel1,
      tel2: basic?.tel2,
      email1: basic?.email1,
      email2: basic?.email2,
    },
    reValidateMode: 'onBlur',
    resolver: zodResolver(updateCompanySchema),
  })

  const updateCompany = (data: UpdateCompanySchemaType) => {
    router.put('/admin/basic/edit/update', data)
  }

  return (
    <Card title="会社情報">
      <form onSubmit={handleSubmit(updateCompany)} css={forms.container}>
        <Grid container spacing={2}>
          {/* 会社名 */}
          <Grid xs={6}>
            <label htmlFor="company_name" css={forms.label}>
              会社名
            </label>
            <input
              id="company_name"
              placeholder="会社名"
              css={[forms.input, errors.company_name && forms.error]}
              {...register('company_name')}
            />
            {errors.company_name && (
              <div css={forms.errText}>{errors.company_name.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 会社名（カナ） */}
          <Grid xs={6}>
            <label htmlFor="company_kana" css={forms.label}>
              会社名（カナ）
            </label>
            <input
              id="company_kana"
              placeholder="会社名（カナ）"
              css={[forms.input, errors.company_kana && forms.error]}
              {...register('company_kana')}
            />
            {errors.company_kana && (
              <div css={forms.errText}>{errors.company_kana.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 電話番号1 */}
          <Grid xs={6}>
            <label htmlFor="tel1" css={forms.label}>
              電話番号1
            </label>
            <input
              id="tel1"
              placeholder="電話番号1"
              css={[forms.input, errors.tel1 && forms.error]}
              {...register('tel1')}
            />
            {errors.tel1 && (
              <div css={forms.errText}>{errors.tel1.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 電話番号2 */}
          <Grid xs={6}>
            <label htmlFor="tel2" css={forms.label}>
              電話番号2
            </label>
            <input
              id="tel2"
              placeholder="電話番号2"
              css={[forms.input, errors.tel2 && forms.error]}
              {...register('tel2')}
            />
            {errors.tel2 && (
              <div css={forms.errText}>{errors.tel2.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* メールアドレス1 */}
          <Grid xs={6}>
            <label htmlFor="email1" css={forms.label}>
              メールアドレス1
            </label>
            <input
              id="email1"
              placeholder="メールアドレス1"
              css={[forms.input, errors.email1 && forms.error]}
              {...register('email1')}
            />
            {errors.email1 && (
              <div css={forms.errText}>{errors.email1.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* メールアドレス2 */}
          <Grid xs={6}>
            <label htmlFor="email2" css={forms.label}>
              メールアドレス2
            </label>
            <input
              id="email2"
              placeholder="メールアドレス2"
              css={[forms.input, errors.email2 && forms.error]}
              {...register('email2')}
            />
            {errors.email2 && (
              <div css={forms.errText}>{errors.email2.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 郵便番号1 */}
          <Grid xs={3}>
            <label htmlFor="zip_code1" css={forms.label}>
              郵便番号1
            </label>
            <input
              id="zip_code1"
              placeholder="123-4567"
              css={[forms.input, errors.zip_code1 && forms.error]}
              {...register('zip_code1')}
            />
            {errors.zip_code1 && (
              <div css={forms.errText}>{errors.zip_code1.message}</div>
            )}
          </Grid>
          <Grid xs={9}></Grid>
          {/* 住所1 */}
          <Grid xs={12}>
            <label htmlFor="address1" css={forms.label}>
              住所1
            </label>
            <input
              id="address1"
              placeholder="住所1"
              css={[forms.input, errors.address1 && forms.error]}
              {...register('address1')}
            />
            {errors.address1 && (
              <div css={forms.errText}>{errors.address1.message}</div>
            )}
          </Grid>
          {/* 郵便番号2 */}
          <Grid xs={3}>
            <label htmlFor="zip_code2" css={forms.label}>
              郵便番号2
            </label>
            <input
              id="zip_code2"
              placeholder="郵便番号2"
              css={[forms.input, errors.zip_code2 && forms.error]}
              {...register('zip_code2')}
            />
            {errors.zip_code2 && (
              <div css={forms.errText}>{errors.zip_code2.message}</div>
            )}
          </Grid>
          <Grid xs={9}></Grid>
          {/* 住所2 */}
          <Grid xs={12}>
            <label htmlFor="address2" css={forms.label}>
              住所2
            </label>
            <input
              id="address2"
              placeholder="住所2"
              css={[forms.input, errors.address2 && forms.error]}
              {...register('address2')}
            />
            {errors.address2 && (
              <div css={forms.errText}>{errors.address2.message}</div>
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
