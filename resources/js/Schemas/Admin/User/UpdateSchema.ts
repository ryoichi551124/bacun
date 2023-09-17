import * as z from 'zod'

const updateUserSchema = z
  .object({
    id: z.number().optional().nullable(),
    last_name: z.string().min(1, '入力が必須の項目です'),
    first_name: z.string().min(1, '入力が必須の項目です'),
    last_kana: z.string().min(1, '入力が必須の項目です'),
    first_kana: z.string().min(1, '入力が必須の項目です'),
    email: z
      .string()
      .min(1, '入力が必須の項目です')
      .email({ message: 'メールアドレスの形式ではありません' }),
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
    building: z
      .string()
      .max(128, '128文字以内で入力してください')
      .optional()
      .nullable(),
    tel1: z.string().min(1, '入力が必須の項目です'),
    tel2: z.string().min(1, '入力が必須の項目です'),
    tel3: z.string().min(1, '入力が必須の項目です'),
    sex: z.enum(['1', '2']),
    birth_year: z.string().min(1, '入力が必須の項目です'),
    birth_month: z.string().min(1, '入力が必須の項目です'),
    birth_day: z.string().min(1, '入力が必須の項目です'),
    memo: z.string().optional().nullable(),
    status: z.string(),
  })

export type UpdateUserSchemaType = z.infer<typeof updateUserSchema>

export default updateUserSchema
