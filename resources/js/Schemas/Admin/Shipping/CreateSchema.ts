import * as z from 'zod'

const createShippingSchema = z.object({
  shipping_last_name: z.string().min(1, '入力が必須の項目です'),
  shipping_first_name: z.string().min(1, '入力が必須の項目です'),
  shipping_last_kana: z.string().min(1, '入力が必須の項目です'),
  shipping_first_kana: z.string().min(1, '入力が必須の項目です'),
  shipping_email: z
    .string()
    .min(1, '入力が必須の項目です')
    .email({ message: 'メールアドレスの形式ではありません' }),
  shipping_zip_code1: z.string().min(1, '入力が必須の項目です'),
  shipping_zip_code2: z.string().min(1, '入力が必須の項目です'),
  shipping_pref: z.string().min(1, '入力が必須の項目です'),
  shipping_city: z
    .string()
    .min(1, '入力が必須のコクモクです')
    .max(32, '32文字以内で入力してください'),
  shipping_address: z
    .string()
    .min(1, '入力が必須のコクモクです')
    .max(128, '128文字以内で入力してください'),
  shipping_building: z
    .string()
    .max(128, '128文字以内で入力してください')
    .optional()
    .nullable(),
  shipping_tel1: z.string().min(1, '入力が必須の項目です'),
  shipping_tel2: z.string().min(1, '入力が必須の項目です'),
  shipping_tel3: z.string().min(1, '入力が必須の項目です'),
  shipping_memo: z.string().optional().nullable(),
})

export type CreateShippingSchemaType = z.infer<typeof createShippingSchema>

export default createShippingSchema
