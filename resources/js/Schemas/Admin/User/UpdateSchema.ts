import * as z from 'zod'

const updateUserSchema = z
  .object({
    last_name: z.string().min(1, '入力が必須の項目です'),
    first_name: z.string().min(1, '入力が必須の項目です'),
    last_kana: z.string().min(1, '入力が必須の項目です'),
    first_kana: z.string().min(1, '入力が必須の項目です'),
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
    zip_code1: z.string().min(1, '入力が必須の項目です'),
    zip_code2: z.string().min(1, '入力が必須の項目です'),
    pref: z.string().min(1, '入力が必須の項目です'),
    city: z
      .string()
      .min(1, '入力が必須の項目です')
      .max(32, '32文字以内で入力してください'),
    address: z
      .string()
      .min(1, '入力が必須の項目です')
      .max(128, '128文字以内で入力してください'),
    building: z.string().max(128, '128文字以内で入力してください'),
    tel1: z.string().min(1, '入力が必須の項目です'),
    tel2: z.string().min(1, '入力が必須の項目です'),
    tel3: z.string().min(1, '入力が必須の項目です'),
    sex: z.enum(['1', '2']),
    birth_year: z.string().min(1, '入力が必須の項目です'),
    birth_month: z.string().min(1, '入力が必須の項目です'),
    birth_day: z.string().min(1, '入力が必須の項目です'),
    memo: z.string().optional(),
    status: z.string(),
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

export type UpdateUserSchemaType = z.infer<typeof updateUserSchema>

export default updateUserSchema
