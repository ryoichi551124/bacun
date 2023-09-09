/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage, router } from '@inertiajs/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useForm } from 'react-hook-form'
import updateMailTemplateSchema, {
  UpdateMailTemplateSchemaType,
} from '@/Schemas/Admin/MailTemplate/updateSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { MailTemplate } from '@/Types'

const button = css`
  margin-right: 2rem;
`

type MailTemplateData = {
  template: MailTemplate
}

/**
 * メールテンプレート作成フォーム
 */
export default function MailTemplateUpdateForm() {
  const { template } = usePage<MailTemplateData>().props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateMailTemplateSchemaType>({
    defaultValues: template,
    reValidateMode: 'onBlur',
    resolver: zodResolver(updateMailTemplateSchema),
  })

  /** メールテンプレート新規作成　*/
  const updateMailTemplate = (data: UpdateMailTemplateSchemaType) => {
    router.put(`/admin/mailtemplate/edit/update/${template.id}`, data)
  }

  return (
    <Card title="メールテンプレート編集">
      <form onSubmit={handleSubmit(updateMailTemplate)} css={forms.container}>
        <Grid container spacing={2}>
          {/* テンプレート名 */}
          <Grid xs={6}>
            <label htmlFor="name" css={forms.label}>
              テンプレート名
            </label>
            <input
              id="name"
              placeholder="テンプレート名"
              css={[forms.input, errors.name && forms.error]}
              {...register('name')}
            />
            {errors.name && (
              <div css={forms.errText}>{errors.name.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* メール件名 */}
          <Grid xs={6}>
            <label htmlFor="subject" css={forms.label}>
              メール件名
            </label>
            <input
              id="subject"
              placeholder="メール件名"
              css={[forms.input, errors.subject && forms.error]}
              {...register('subject')}
            />
            {errors.subject && (
              <div css={forms.errText}>{errors.subject.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 差出人名 */}
          <Grid xs={6}>
            <label htmlFor="from_name" css={forms.label}>
              差出人名
            </label>
            <input
              id="from_name"
              placeholder="差出人名"
              css={[forms.input, errors.from_name && forms.error]}
              {...register('from_name')}
            />
            {errors.from_name && (
              <div css={forms.errText}>{errors.from_name.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 差出人メールアドレス */}
          <Grid xs={6}>
            <label htmlFor="from_address" css={forms.label}>
              差出人メールアドレス
            </label>
            <input
              id="from_address"
              placeholder="差出人メールアドレス"
              css={[forms.input, errors.from_address && forms.error]}
              {...register('from_address')}
            />
            {errors.from_address && (
              <div css={forms.errText}>{errors.from_address.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 返信先名 */}
          <Grid xs={6}>
            <label htmlFor="reply_to_name" css={forms.label}>
              返信先名
            </label>
            <input
              id="reply_to_name"
              placeholder="返信先名"
              css={[forms.input, errors.reply_to_name && forms.error]}
              {...register('reply_to_name')}
            />
            {errors.reply_to_name && (
              <div css={forms.errText}>{errors.reply_to_name.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 返信先メールアドレス */}
          <Grid xs={6}>
            <label htmlFor="reply_to_address" css={forms.label}>
              返信先メールアドレス
            </label>
            <input
              id="reply_to_address"
              placeholder="返信先メールアドレス"
              css={[forms.input, errors.reply_to_address && forms.error]}
              {...register('reply_to_address')}
            />
            {errors.reply_to_address && (
              <div css={forms.errText}>{errors.reply_to_address.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* CCアドレス */}
          <Grid xs={6}>
            <label htmlFor="cc_address" css={forms.label}>
              CCアドレス
            </label>
            <input
              id="cc_address"
              placeholder="CCアドレス"
              css={[forms.input, errors.cc_address && forms.error]}
              {...register('cc_address')}
            />
            {errors.cc_address && (
              <div css={forms.errText}>{errors.cc_address.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* BCCアドレス */}
          <Grid xs={6}>
            <label htmlFor="bcc_address" css={forms.label}>
              BCCアドレス
            </label>
            <input
              id="bcc_address"
              placeholder="BCCアドレス"
              css={[forms.input, errors.bcc_address && forms.error]}
              {...register('bcc_address')}
            />
            {errors.bcc_address && (
              <div css={forms.errText}>{errors.bcc_address.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* メール本文 */}
          <Grid xs={18}>
            <label htmlFor="body" css={forms.label}>
              メール本文
            </label>
            <textarea
              id="body"
              placeholder="メール本文"
              rows={12}
              css={[forms.input, errors.body && forms.error]}
              {...register('body')}
            />
            {errors.body && (
              <div css={forms.errText}>{errors.body.message}</div>
            )}
          </Grid>
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
