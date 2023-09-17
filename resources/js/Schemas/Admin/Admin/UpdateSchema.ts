import * as z from 'zod'

const updateAdminSchema = z.object({
  name: z.string().min(1, '入力が必須の項目です'),
  email: z
    .string()
    .min(1, '入力が必須の項目です')
    .email({ message: 'メールアドレスの形式ではありません' }),
  role: z.enum(['admin', 'member']),
})

export type UpdateAdminSchemaType = z.infer<typeof updateAdminSchema>

export default updateAdminSchema
