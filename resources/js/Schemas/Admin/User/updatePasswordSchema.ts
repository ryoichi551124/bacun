import * as z from 'zod'

const updateUserPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, '8文字以上で入力してください')
      .regex(
        /^(?=.*?[A-Z\d])[a-zA-Z0-9.?/-]{8,24}$/,
        'パスワードは数字とアルファベットの大文字を一文字以上含めてください',
      ),
    password_confirmation: z.string().min(8, '8文字以上で入力してください'),
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

export type UpdateUserPasswordSchemaType = z.infer<typeof updateUserPasswordSchema>

export default updateUserPasswordSchema
