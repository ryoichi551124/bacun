import * as z from 'zod'

const createMailTemplateSchema = z.object({
  name: z.string().min(1, '入力が必須の項目です'),
  subject: z.string().min(1, '入力が必須の項目です'),
  body: z.string().min(1, '入力が必須の項目です'),
  from_name: z.string().min(1, '入力が必須の項目です'),
  from_address: z
    .string()
    .min(1, '入力が必須の項目です')
    .email({ message: 'メールアドレスの形式ではありません' }),
  reply_to_name: z.string().optional().nullable(),
  reply_to_address: z
    .string()
    .email({ message: 'メールアドレスの形式ではありません' })
    .optional()
    .nullable(),
  cc_address: z.string().optional().nullable(),
  bcc_address: z.string().optional().nullable(),
})

export type CreateMailTemplateSchemaType = z.infer<
  typeof createMailTemplateSchema
>

export default createMailTemplateSchema
