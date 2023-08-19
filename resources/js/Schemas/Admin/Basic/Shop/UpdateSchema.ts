import * as z from 'zod'

const updateShopSchema = z.object({
  shop_name: z.string().optional().nullable(),
  shop_kana: z.string().optional().nullable(),
  shop_message: z.string().optional().nullable(),
})

export type UpdateShopSchemaType = z.infer<typeof updateShopSchema>

export default updateShopSchema
