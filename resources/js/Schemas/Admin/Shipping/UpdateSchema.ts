import * as z from 'zod'

const updateShippingSchema = z.object({
  last_name: z.string().min(1, '入力が必須の項目です'),
  first_name: z.string().min(1, '入力が必須の項目です'),
  last_kana: z.string().min(1, '入力が必須の項目です'),
  first_kana: z.string().min(1, '入力が必須の項目です'),
  zip_code1: z.string().min(1, '入力が必須の項目です'),
  zip_code2: z.string().min(1, '入力が必須の項目です'),
  pref: z.string().min(1, '入力が必須の項目です'),
  city: z
    .string()
    .min(1, '入力が必須のコクモクです')
    .max(32, '32文字以内で入力してください'),
  address: z
    .string()
    .min(1, '入力が必須のコクモクです')
    .max(128, '128文字以内で入力してください'),
  building: z
    .string()
    .max(128, '128文字以内で入力してください')
    .optional()
    .nullable(),
  memo: z.string().optional().nullable(),
})

export type UpdateShippingSchemaType = z.infer<typeof updateShippingSchema>

export default updateShippingSchema
