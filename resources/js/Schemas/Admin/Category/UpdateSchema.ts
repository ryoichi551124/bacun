import * as z from 'zod'

const updateCategorySchema = z.object({
  name: z.string().min(1, 'カテゴリー名は必須項目です'),
})

export type UpdateCategorySchemaType = z.infer<typeof updateCategorySchema>

export default updateCategorySchema
