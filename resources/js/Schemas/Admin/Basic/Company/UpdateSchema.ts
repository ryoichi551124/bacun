import * as z from 'zod'

const ZIP_CODE = new RegExp('^[0-9]{3}-[0-9]{4}$')
const TEL = new RegExp('^([0-9]|-){12,13}$')
const EMAIL = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')

const updateCompanySchema = z.object({
  company_name: z.string().optional().nullable(),
  company_kana: z.string().optional().nullable(),
  tel1: z
    .string()
    .optional()
    .nullable()
    .refine(
      (value) => {
        return value === '' || value === null || TEL.test(value as string)
      },
      { message: '半角数字とハイフンで入力してください' },
    ),
  tel2: z
    .string()
    .optional()
    .nullable()
    .refine(
      (value) => {
        return value === '' || value === null || TEL.test(value as string)
      },
      { message: '半角数字とハイフンで入力してください' },
    ),
  email1: z
    .string()
    .optional()
    .nullable()
    .refine(
      (value) => {
        return value === '' || value === null || EMAIL.test(value as string)
      },
      { message: 'メールアドレスの形式ではありません' },
    ),
  email2: z
    .string()
    .optional()
    .nullable()
    .refine(
      (value) => {
        return value === '' || value === null || EMAIL.test(value as string)
      },
      { message: 'メールアドレスの形式ではありません' },
    ),
  zip_code1: z
    .string()
    .optional()
    .nullable()
    .refine(
      (value) => {
        return value === '' || value === null || ZIP_CODE.test(value as string)
      },
      { message: '半角数字、ハイフン付きで入力してください（例: 123-4567）' },
    ),
  address1: z.string().optional(),
  zip_code2: z
    .string()
    .optional()
    .nullable()
    .refine(
      (value) => {
        return value === '' || value === null || ZIP_CODE.test(value as string)
      },
      { message: '半角数字、ハイフン付きで入力してください（例: 123-4567）' },
    ),
  address2: z.string().optional(),
})

export type UpdateCompanySchemaType = z.infer<typeof updateCompanySchema>

export default updateCompanySchema
