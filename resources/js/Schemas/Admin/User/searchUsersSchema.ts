import * as z from 'zod'

const searchUsersSchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
})

export type SearchUsersSchemaType = z.infer<typeof searchUsersSchema>

export default searchUsersSchema
