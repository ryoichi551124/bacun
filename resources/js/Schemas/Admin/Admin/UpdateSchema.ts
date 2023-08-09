import * as z from 'zod'

const updateAdminSchema = z
  .object({
    name: z.string().min(1, '入力が必須の項目です'),
    email: z
      .string()
      .min(1, '入力が必須の項目です')
      .email({ message: 'メールアドレスの形式ではありません' }),
    password: z
      .string()
      .min(8, '8文字以上で入力してください')
      .regex(
        /^(?=.*?[A-Z\d])[a-zA-Z0-9.?/-]{8,24}$/,
        'パスワードは数字とアルファベットの大文字を一文字以上含めてください',
      ),
    password_confirmation: z.string().min(8, '8文字以上で入力してください'),
    role: z.enum(['admin', 'member']),
  })
  .refine(
    ({ password, password_confirmation }) => {
      return password === password_confirmation
    },
    {
      path: ['password_confirmation'],
      message: '確認用のパスワードに誤りがあります',
    },
  )

export type UpdateAdminSchemaType = z.infer<typeof updateAdminSchema>

export default updateAdminSchema
