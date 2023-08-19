import * as z from 'zod'

const createCategorySchema = z.object({
  name: z.string().min(1, 'カテゴリー名は必須項目です'),
})

export type CreateCategorySchemaType = z.infer<typeof createCategorySchema>

export default createCategorySchema
