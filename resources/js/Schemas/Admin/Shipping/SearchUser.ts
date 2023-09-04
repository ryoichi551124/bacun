import * as z from 'zod'

const searchUserSchema = z.object({
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
})

export type SearchUserSchemaType = z.infer<typeof searchUserSchema>

export default searchUserSchema
